"use client"

import { Bot, Server, Headset, ShoppingCart, BarChart3, Globe, Cpu, Rocket } from "lucide-react"

const services = [
  {
    title: "Agentic AI Systems",
    description: "Autonomous agents that handle multi-step tasks, make decisions, and execute workflows without human intervention.",
    icon: Bot,
    tag: "Autonomous",
    featured: true,
  },
  {
    title: "Webservice & APIs",
    description: "Robust, scalable backend services and RESTful APIs built to power modern applications and AI integrations.",
    icon: Server,
    tag: "Scalable",
  },
  {
    title: "Customer Care Chatbots",
    description: "Integrated 24/7 chatbots embedded into your product — live chat, FAQ resolution, lead capture, and ticket handling.",
    icon: Headset,
    tag: "24/7 Live",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce builds with AI-powered recommendations, inventory management, and conversion optimization.",
    icon: ShoppingCart,
    tag: "Full-Stack",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business dashboards with AI-driven insights, KPI tracking, and automated reporting pipelines.",
    icon: BarChart3,
    tag: "Real-Time",
  },
  {
    title: "AI Website Builder",
    description: "Drag-and-drop website builder augmented with AI generation — create, customize, and deploy in hours, not weeks.",
    icon: Globe,
    tag: "No-Code",
  },
  {
    title: "ML / DL Research",
    description: "Applied ML and deep learning R&D — model fine-tuning, architecture research, and custom model deployment.",
    icon: Cpu,
    tag: "Research",
  },
  {
    title: "Coming Soon",
    description: "Multi-modal models, voice AI, and autonomous pipelines — more products in active development.",
    icon: Rocket,
    tag: "Future",
    isComingSoon: true,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            AI solutions,<br />
            <span className="text-gradient">precisely engineered</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From conversational agents to full-stack platforms — we build and deploy AI that works while you sleep.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            const isFeatured = service.featured
            return (
              <div
                key={service.title}
                className={`group relative rounded-xl border transition-all duration-300 overflow-hidden gradient-border-top
                  ${isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}
                  ${service.isComingSoon
                    ? "border-dashed border-border/40 opacity-60 bg-card/20"
                    : "border-border bg-card/40 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                  }
                `}
              >
                {isFeatured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                )}

                <div className={`p-8 h-full flex flex-col ${isFeatured ? "lg:p-10" : ""}`}>
                  <div className="mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${isFeatured ? "text-xl" : "text-base"}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/8 border border-primary/15 text-primary/80 text-[10px] font-semibold uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
