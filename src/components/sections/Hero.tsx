"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const codeLines = [
  { text: "from welldropp import AIAgent", color: "text-emerald-400" },
  { text: "", color: "" },
  { text: "agent = AIAgent(", color: "text-slate-300" },
  { text: '    name="CustomerBot",', color: "text-amber-300" },
  { text: "    capabilities=[", color: "text-slate-300" },
  { text: '        "chat", "leads", "tickets"', color: "text-cyan-300" },
  { text: "    ]", color: "text-slate-300" },
  { text: ")", color: "text-slate-300" },
  { text: "", color: "" },
  { text: 'agent.deploy(platform="whatsapp")', color: "text-emerald-400" },
]

const output = [
  { text: "✓ Agent compiled", color: "text-emerald-400" },
  { text: "✓ Deployed in 2.3s", color: "text-emerald-400" },
  { text: "✓ 24/7 monitoring active", color: "text-cyan-400" },
  { text: "● Listening for messages...", color: "text-emerald-300" },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/8 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-600/6 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 uppercase tracking-widest animate-fade-in-up">
              <Zap className="w-3 h-3" />
              Agentic AI Solutions for Modern Business
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05] animate-fade-in-up [animation-delay:150ms]">
              Build Smarter<br />
              <span className="text-gradient">AI. Deploy</span><br />
              Faster.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg animate-fade-in-up [animation-delay:300ms]">
              Welldropp delivers precision AI — from autonomous agents and customer support bots to full e-commerce platforms and ML research. One partner, infinite scale.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up [animation-delay:450ms]">
              <Button asChild size="lg" className="h-12 px-8 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                <Link href="#services">Explore Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-xl text-base font-semibold border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <Link href="#works">View Our Work</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 animate-fade-in-up [animation-delay:600ms]">
              {[
                { label: "AI Services", value: "7+" },
                { label: "Support Runtime", value: "24/7" },
                { label: "Scale Potential", value: "∞" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-border" />}
                  <div>
                    <div className="text-2xl font-black text-gradient">{stat.value}</div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code terminal mockup */}
          <div className="animate-fade-in-up [animation-delay:300ms]">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/8 blur-3xl rounded-3xl pointer-events-none" />
              <div className="relative rounded-2xl border border-border bg-[hsl(135,46%,4%)] overflow-hidden shadow-2xl shadow-black/40">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-[hsl(135,46%,5%)]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">welldropp_agent.py</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-muted-foreground/40 text-xs mb-4 select-none"># Welldropp AI Agent SDK</div>
                  {codeLines.map((line, i) => (
                    <div key={i} className={`${line.color} min-h-[1.5rem]`}>
                      {line.text}
                    </div>
                  ))}

                  {/* Output section */}
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <div className="text-muted-foreground/40 text-xs mb-3 select-none">// Output</div>
                    {output.map((line, i) => (
                      <div key={i} className={`${line.color} text-sm flex items-center gap-2`}>
                        {line.text}
                        {i === output.length - 1 && (
                          <span className="inline-block w-2 h-4 bg-emerald-400 animate-blink ml-0.5" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status bar */}
                <div className="px-6 py-2.5 border-t border-border/40 bg-[hsl(135,46%,5%)] flex items-center justify-between text-[10px] font-mono text-muted-foreground/60">
                  <span>welldropp-sdk v2.4.1</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Agent Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
