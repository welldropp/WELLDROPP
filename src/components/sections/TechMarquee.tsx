"use client"

const row1 = [
  "Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain",
  "Next.js", "React", "Node.js", "FastAPI", "Docker",
  "Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain",
  "Next.js", "React", "Node.js", "FastAPI", "Docker",
]

const row2 = [
  "Supabase", "Firebase", "AWS", "Kubernetes", "PostgreSQL",
  "HuggingFace", "Anthropic", "Vercel", "Redis", "MongoDB",
  "Supabase", "Firebase", "AWS", "Kubernetes", "PostgreSQL",
  "HuggingFace", "Anthropic", "Vercel", "Redis", "MongoDB",
]

export function TechMarquee() {
  return (
    <section className="py-16 border-y border-border bg-card/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Powered by industry-leading technologies
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex overflow-hidden mb-4">
        <div className="marquee-track flex gap-3 flex-shrink-0">
          {row1.map((tech, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-4 py-2 rounded-lg bg-primary/8 border border-primary/15 text-primary/70 text-xs font-semibold tracking-wide whitespace-nowrap hover:bg-primary/15 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track-reverse flex gap-3 flex-shrink-0">
          {row2.map((tech, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-4 py-2 rounded-lg bg-secondary/8 border border-secondary/15 text-secondary/70 text-xs font-semibold tracking-wide whitespace-nowrap hover:bg-secondary/15 hover:text-secondary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
