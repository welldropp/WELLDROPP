"use client"

import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Building Behavior-Aware Neural Networks for Real-Time Threat Detection",
    excerpt: "How custom MLP classifiers outperform traditional CV pipelines in edge deployment scenarios...",
    category: "Deep Learning",
    date: "Mar 2025",
    readTime: "8 min",
    gradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    badgeColor: "bg-primary/15 text-primary border-primary/20",
  },
  {
    title: "Deploying Agentic AI in Production: A Framework for Reliability at Scale",
    excerpt: "A practical guide to building agent pipelines that don't break at 3AM when you're asleep...",
    category: "MLOps",
    date: "Feb 2025",
    readTime: "12 min",
    gradient: "from-teal-600/20 via-teal-600/5 to-transparent",
    badgeColor: "bg-secondary/15 text-secondary border-secondary/20",
  },
  {
    title: "Why Small Specialized Models Will Dominate Business AI in 2025",
    excerpt: "A finely tuned 7B model on your own infra can outperform GPT-4 for your specific use case...",
    category: "AI Research",
    date: "Jan 2025",
    readTime: "10 min",
    gradient: "from-cyan-600/20 via-cyan-600/5 to-transparent",
    badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  },
]

export function Research() {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Research & Insights</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Latest from the<br />
              <span className="text-gradient">Welldropp Lab</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Deep-dives on AI architecture, MLOps, and building production-grade intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.title}
              className="group rounded-xl border border-border bg-card/40 overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gradient-border-top"
            >
              {/* Gradient header */}
              <div className={`h-36 bg-gradient-to-br ${article.gradient} flex items-end p-5 border-b border-border/40`}>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md border text-[10px] font-semibold uppercase tracking-wider ${article.badgeColor}`}>
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground border-t border-border/40 pt-4">
                  <span>{article.date} · {article.readTime} read</span>
                  <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
