"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "7+", label: "AI Services", description: "Deployed & production-ready" },
  { value: "100%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
  { value: "24/7", label: "Support", description: "Round-the-clock monitoring" },
  { value: "∞", label: "Scale", description: "No ceiling on growth" },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 border-y border-border bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Built for performance.{" "}
            <span className="text-gradient">Engineered for scale.</span>
          </h2>
          <p className="text-muted-foreground text-sm">Numbers that define our commitment to excellence.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-background p-8 md:p-10 flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
