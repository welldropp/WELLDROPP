"use client"

import { Check, Sparkles, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ── Google Form URLs ──────────────────────────────────────────────
// Replace these with your actual Google Form links.
// Create 3 Google Forms at https://docs.google.com/forms and paste URLs below.
const GOOGLE_FORM_URLS = {
  starter: "https://forms.gle/YOUR_STARTER_FORM_ID",
  professional: "https://forms.gle/YOUR_PROFESSIONAL_FORM_ID",
  enterprise: "https://forms.gle/YOUR_ENTERPRISE_FORM_ID",
}

const plans = [
  {
    name: "Starter",
    price: "₹2,499",
    description: "Perfect for small businesses and personal brands getting started online.",
    features: [
      "Up to 4-page responsive website",
      "Data Dashboard integration",
      "AI Agent (Telegram / Instagram / WhatsApp Bot)",
      "Mobile-friendly design",
      "Basic SEO setup",
      "1 round of revisions",
      "Email support",
    ],
    popular: false,
    formUrl: GOOGLE_FORM_URLS.starter,
  },
  {
    name: "Professional",
    price: "₹9,999",
    description: "For growing businesses that need a complete web presence with AI-powered features.",
    features: [
      "5+ page responsive website",
      "AI Chat Service integrated",
      "Custom domain name setup",
      "SEO optimization add-on",
      "Data Dashboard integration",
      "AI Agent (Telegram / Instagram / WhatsApp Bot)",
      "3 rounds of revisions",
      "Priority support",
    ],
    popular: true,
    formUrl: GOOGLE_FORM_URLS.professional,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale e-commerce platform with everything from Professional, plus advanced features.",
    features: [
      "Complete E-Commerce web service",
      "All Professional plan features included",
      "Payment gateway integration",
      "Inventory management system",
      "AI-powered product recommendations",
      "Advanced analytics & reporting",
      "Unlimited revisions",
      "Dedicated account manager",
    ],
    popular: false,
    formUrl: GOOGLE_FORM_URLS.enterprise,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card/10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            No hidden fees. Pick a plan that fits your needs and let us build your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative glass-card p-10 rounded-2xl flex flex-col text-left transition-all duration-300 hover:-translate-y-1",
                plan.popular
                  ? "border-primary bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 shadow-[0_0_60px_rgba(0,230,118,0.15)] scale-[1.02] md:scale-105"
                  : "border-border hover:border-primary/30"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background font-black text-[10px] py-1.5 px-5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <p className={cn("text-xs font-black uppercase tracking-widest mb-4", plan.popular ? "text-primary" : "text-muted-foreground")}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={cn("w-4 h-4 shrink-0 mt-0.5", plan.popular ? "text-primary" : "text-primary/70")} />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className={cn(
                  "w-full rounded-full h-12 font-black transition-all",
                  plan.popular
                    ? "bg-primary text-background hover:bg-secondary hover:text-background shadow-[0_5px_20px_rgba(0,230,118,0.25)]"
                    : "border-border hover:bg-primary hover:text-background transition-colors"
                )}
              >
                <a href={plan.formUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
