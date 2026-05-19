"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card/10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Simple, transparent{" "}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            No hidden fees. Pick a plan that fits your needs and let us build your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-xl flex flex-col text-left transition-all duration-300 hover:-translate-y-1",
                plan.popular
                  ? "border-2 border-primary bg-gradient-to-b from-primary/10 to-card/60 shadow-xl shadow-primary/10"
                  : "border border-border bg-card/40 hover:border-primary/30"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-semibold text-[10px] py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-8">
                  <p className={cn("text-xs font-semibold uppercase tracking-widest mb-4", plan.popular ? "text-primary" : "text-muted-foreground")}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-black">{plan.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-3.5 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={cn("w-4 h-4 shrink-0 mt-0.5", plan.popular ? "text-primary" : "text-primary/60")} />
                      <span className="text-foreground/80 text-[13px]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={cn(
                    "w-full rounded-xl h-11 font-semibold transition-all",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-transparent border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  )}
                >
                  <a href="#contact">
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
