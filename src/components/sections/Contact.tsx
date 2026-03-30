"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, ShieldCheck, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

const formSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  // OTP verification state
  const [emailVerified, setEmailVerified] = React.useState(false)
  const [otpSent, setOtpSent] = React.useState(false)
  const [otpCode, setOtpCode] = React.useState("")
  const [sendingOtp, setSendingOtp] = React.useState(false)
  const [verifyingOtp, setVerifyingOtp] = React.useState(false)
  const [otpCooldown, setOtpCooldown] = React.useState(0)
  const [verifiedEmail, setVerifiedEmail] = React.useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const watchedEmail = form.watch("email")

  // Reset verification if email changes after verification
  React.useEffect(() => {
    if (emailVerified && watchedEmail !== verifiedEmail) {
      setEmailVerified(false)
      setOtpSent(false)
      setOtpCode("")
      setVerifiedEmail("")
    }
  }, [watchedEmail, emailVerified, verifiedEmail])

  // Cooldown timer
  React.useEffect(() => {
    if (otpCooldown <= 0) return
    const timer = setTimeout(() => setOtpCooldown(otpCooldown - 1), 1000)
    return () => clearTimeout(timer)
  }, [otpCooldown])

  // Send OTP via Supabase Auth
  async function handleSendOtp() {
    const email = form.getValues("email")
    const emailValid = z.string().email().safeParse(email)
    if (!emailValid.success) {
      form.setError("email", { message: "Please enter a valid email first" })
      return
    }

    setSendingOtp(true)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        },
      })

      if (error) {
        toast({
          variant: "destructive",
          title: "Could not send code",
          description: error.message,
        })
        return
      }

      setOtpSent(true)
      setOtpCooldown(60)
      toast({
        title: "Verification code sent",
        description: `Check your inbox at ${email}`,
      })
    } catch {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Could not reach the server. Please try again.",
      })
    } finally {
      setSendingOtp(false)
    }
  }

  // Verify OTP via Supabase Auth
  async function handleVerifyOtp() {
    if (otpCode.length !== 6) return

    setVerifyingOtp(true)
    try {
      const email = form.getValues("email")
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: "email",
      })

      if (error) {
        toast({
          variant: "destructive",
          title: "Verification failed",
          description: error.message,
        })
        return
      }

      setEmailVerified(true)
      setVerifiedEmail(email)
      toast({
        title: "Email verified",
        description: "You can now submit the form.",
      })
    } catch {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Could not verify. Please try again.",
      })
    } finally {
      setVerifyingOtp(false)
    }
  }

  // Submit form → save to Supabase DB + send email notification
  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!emailVerified) {
      toast({
        variant: "destructive",
        title: "Email not verified",
        description: "Please verify your email before sending.",
      })
      return
    }

    setIsSubmitting(true)
    try {
      let delivered = false

      // 1. Save to Supabase database
      try {
        const { error } = await supabase.from("contact_messages").insert({
          first_name: data.first_name,
          last_name: data.last_name || "",
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        })
        if (!error) delivered = true
      } catch {
        // Supabase insert failed, continue to other methods
      }

      // 2. Send email via server API (nodemailer → Gmail SMTP)
      try {
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        const apiResult = await apiRes.json()
        if (apiResult.success) delivered = true
      } catch {
        // Server API failed, try Web3Forms
      }

      // 3. Fallback: Web3Forms (no server config needed)
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "012cf280-c68e-4589-a206-628fbd19d8bc",
            subject: `New Client Inquiry - ${data.service}`,
            from_name: `${data.first_name} ${data.last_name || ""}`.trim(),
            replyto: data.email,
            Name: `${data.first_name} ${data.last_name || ""}`.trim(),
            Email: data.email,
            Phone: data.phone,
            Service: data.service,
            Message: data.message,
          }),
        })
        const web3Result = await web3Res.json()
        if (web3Result.success) delivered = true
      } catch {
        // Web3Forms also failed
      }

      if (!delivered) {
        throw new Error("Could not send message. Please email us directly at welldropp.tech@gmail.com")
      }

      setSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you shortly.",
      })
      form.reset()
      setEmailVerified(false)
      setOtpSent(false)
      setOtpCode("")
      setVerifiedEmail("")

      // Sign out the OTP session (cleanup)
      await supabase.auth.signOut()

      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong."
      toast({
        variant: "destructive",
        title: "Error Sending Message",
        description: `${message} You can also email us directly at welldropp.tech@gmail.com`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="reveal">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let&apos;s build<br />something real.</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
              Tell us what you need. We&apos;ll scope it, price it, and ship it — fast.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, value: "welldropp.tech@gmail.com", label: "Email Us" },
                { icon: Phone, value: "+91 87788 60376", label: "Call Us" },
                { icon: MapPin, value: "Coimbatore, Tamil Nadu, India", label: "Location" },
                { icon: Clock, value: "Mon-Sat, 9AM-10PM", label: "Available Hours" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                    <span className="text-foreground font-semibold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="glass-card p-10 rounded-[2rem] border border-border/50">
              <h3 className="text-xl font-black mb-8">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-background/50 border-border h-12 rounded-xl focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-background/50 border-border h-12 rounded-xl focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email field with OTP verification */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                          Email Address
                          {emailVerified && (
                            <span className="ml-2 text-primary inline-flex items-center gap-1 normal-case tracking-normal font-semibold">
                              <ShieldCheck className="w-3.5 h-3.5" /> Verified
                            </span>
                          )}
                        </FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              placeholder="john@company.com"
                              {...field}
                              disabled={emailVerified}
                              className="bg-background/50 border-border h-12 rounded-xl focus:border-primary flex-1"
                            />
                          </FormControl>
                          {!emailVerified && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleSendOtp}
                              disabled={sendingOtp || otpCooldown > 0}
                              className="h-12 rounded-xl px-4 shrink-0 border-primary/30 hover:bg-primary/10 text-sm font-bold"
                            >
                              {sendingOtp ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : otpCooldown > 0 ? (
                                `${otpCooldown}s`
                              ) : otpSent ? (
                                "Resend"
                              ) : (
                                "Verify"
                              )}
                            </Button>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* OTP Input — shown after code is sent, hidden after verification */}
                  {otpSent && !emailVerified && (
                    <div className="flex gap-2 items-end animate-in fade-in slide-in-from-top-2">
                      <div className="flex-1">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                          Verification Code
                        </label>
                        <Input
                          placeholder="Enter 6-digit code"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                          maxLength={6}
                          className="bg-background/50 border-border h-12 rounded-xl focus:border-primary font-mono text-lg tracking-[0.3em] text-center"
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otpCode.length !== 6 || verifyingOtp}
                        className="h-12 rounded-xl px-6 bg-primary text-background hover:bg-secondary font-bold"
                      >
                        {verifyingOtp ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm"}
                      </Button>
                    </div>
                  )}

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 87788 60376" {...field} className="bg-background/50 border-border h-12 rounded-xl focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl focus:ring-primary">
                              <SelectValue placeholder="Choose a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="Web Development">Web Development</SelectItem>
                            <SelectItem value="AI Agent (Telegram / Instagram / WhatsApp Bot)">AI Agent (Telegram / Instagram / WhatsApp Bot)</SelectItem>
                            <SelectItem value="Data Analytics Dashboard">Data Analytics Dashboard</SelectItem>
                            <SelectItem value="MLOps & ML/DL Research">MLOps &amp; ML/DL Research</SelectItem>
                            <SelectItem value="E-Commerce Platform">E-Commerce Platform</SelectItem>
                            <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                            <SelectItem value="Custom / Enterprise">Custom / Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">About your project</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you want to build..."
                            {...field}
                            className="bg-background/50 border-border min-h-[120px] rounded-xl focus:border-primary resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-full text-lg font-black bg-primary text-background hover:bg-secondary transition-all shadow-[0_10px_30px_rgba(0,230,118,0.2)] disabled:opacity-50"
                    disabled={isSubmitting || !emailVerified}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Sending...</span>
                    ) : !emailVerified ? (
                      "Verify Email to Send"
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
                {submitted && (
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-semibold text-center animate-in fade-in slide-in-from-bottom-2">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
