"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Welldropp's Telegram bot transformed our customer service. Response time dropped from 6 hours to under 30 seconds. Absolutely wild ROI.",
    author: "Ravi Kumar",
    role: "CEO, RetailPlus India",
    initials: "RK",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    quote: "The e-commerce platform they built is rock solid. AI recommendations alone increased our average order value by 34% in the first month.",
    author: "Sneha Mehta",
    role: "Founder, StyleKart",
    initials: "SM",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    quote: "Their agentic AI system runs our entire onboarding pipeline autonomously. We went from 3 staff doing manual work to zero. Game changer.",
    author: "Arjun Pillai",
    role: "CTO, NexaFlow SaaS",
    initials: "AP",
    gradient: "from-cyan-600 to-blue-500",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Results that speak<br />
            <span className="text-gradient">for themselves.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Trusted by startups and enterprises building the future with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group rounded-xl border border-border bg-card/40 p-8 flex flex-col hover:border-blue-500/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 gradient-border-top"
            >
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-grow italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
