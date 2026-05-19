"use client"

import { CheckCircle2 } from "lucide-react"

const capabilities = [
  "Autonomous Multi-Agent Pipelines",
  "Real-Time Analytics & Dashboards",
  "24/7 Chatbot Integration (WhatsApp, Telegram, Instagram)",
  "Custom ML Model Training & Fine-Tuning",
  "E-Commerce AI Optimization",
  "MLOps Infrastructure & Deployment",
  "Computer Vision & NLP Systems",
  "API & Microservices Architecture",
]

const metricsLines = [
  { label: "Inference latency", value: "< 80ms", color: "text-emerald-400" },
  { label: "Agent uptime", value: "99.97%", color: "text-cyan-400" },
  { label: "Throughput", value: "10k req/s", color: "text-emerald-300" },
  { label: "Model accuracy", value: "94.2%", color: "text-secondary" },
  { label: "Deploy time", value: "< 3min", color: "text-emerald-400" },
]

export function Capabilities() {
  return (
    <section className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Capabilities list */}
          <div>
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Full-Stack AI
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Everything your business needs,{" "}
              <span className="text-gradient">in one partner</span>
            </h2>
            <p className="text-muted-foreground text-base mb-10 leading-relaxed">
              From rapid prototyping to enterprise-grade deployments — we cover the entire AI value chain so you don&apos;t have to juggle multiple vendors.
            </p>

            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85 leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Metrics terminal */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/6 blur-3xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl border border-border bg-[hsl(135,46%,4%)] overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-[hsl(135,46%,5%)]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">system_metrics.live</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="text-muted-foreground/50 text-xs mb-6">$ welldropp monitor --env production</div>

                <div className="space-y-5">
                  {metricsLines.map((m, i) => (
                    <div key={i} className="flex items-center justify-between gap-4">
                      <span className="text-slate-400 text-sm">{m.label}</span>
                      <div className="flex-1 h-px bg-border/40 mx-4" />
                      <span className={`${m.color} font-bold tabular-nums`}>{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-border/40">
                  <div className="text-muted-foreground/40 text-xs mb-4">// Active deployments</div>
                  <div className="space-y-2">
                    {["CustomerBot v2.1", "AnalyticsEngine v1.4", "RecoModel v3.0"].map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-slate-300 text-xs">{d}</span>
                        <span className="ml-auto text-emerald-400 text-[10px]">running</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
