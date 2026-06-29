"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Portfolio() {
  const projects = [
    {
      title: "Tode",
      category: "Machine Learning",
      description: "Advanced ML model implementation for predictive analysis and pattern recognition.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
      external: "https://github.com/welldropp/tode",
      tags: ["Python", "Machine Learning", "Research", "GitHub"],
      overview: "An advanced machine learning repository focused on robust model implementation and experimentation.",
      problem: "Complex data patterns require sophisticated models that are both accurate and scalable for real-world applications.",
      solution: "Developed a comprehensive ML pipeline and model architecture to process and analyze complex datasets efficiently.",
      results: [
        "High accuracy predictive modeling",
        "Scalable data processing architecture",
        "Open-source implementation for community research"
      ]
    },
    {
      title: "Tede Annotation v1",
      category: "Data Tools",
      description: "A specialized data annotation tool designed for efficient machine learning dataset preparation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      external: "https://github.com/welldropp/tede_annotation.v1",
      tags: ["Python", "Data Processing", "MLOps", "GitHub"],
      overview: "A dedicated toolkit for streamlining the data annotation process for machine learning engineering teams.",
      problem: "Data annotation is frequently a major bottleneck in the ML pipeline, demanding tedious and error-prone manual effort.",
      solution: "Built a customized annotation interface to accelerate dataset preparation, ensuring high-quality labels for model training.",
      results: [
        "Accelerated dataset preparation time",
        "Improved annotation accuracy and consistency",
        "Streamlined workflow for ML researchers"
      ]
    },
    {
      title: "Clinic Website",
      category: "Healthcare",
      description: "A comprehensive, highly accessible platform for a medical clinic to manage patients and build trust.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
      external: "https://clinic-sample-website-six.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      overview: "A professional medical platform designed to offer clear information about healthcare services and ease patient booking.",
      problem: "Local clinics struggle to make their services visible online with a trustworthy, reliable digital storefront that conveys modern healthcare standards.",
      solution: "Implemented an empathetic, highly accessible website layout highlighting key medical services, practitioner profiles, and patient resources.",
      results: [
        "Enhanced patient trust through professional design",
        "Streamlined access to clinic information and services",
        "Improved local search visibility for healthcare providers"
      ]
    },
    {
      title: "Advocate Website",
      category: "Legal",
      description: "A modern, responsive website built for a legal professional to establish strong online presence.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      external: "https://sampleadvocatewesite.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      overview: "A professional website designed for legal services to improve online visibility and credibility.",
      problem: "Traditional legal professionals lacked a strong digital presence and modern UI, making it difficult for new clients to discover their practice or trust their online persona.",
      solution: "Developed a clean, responsive, and modern website with structured content, user-friendly navigation, and a focus on lead generation and trust markers.",
      results: [
        "Improved professional presentation",
        "Better accessibility for clients across all devices",
        "Enhanced digital presence and search visibility"
      ]
    },
    {
      title: "Doctor Website",
      category: "Healthcare",
      description: "An elegant, personal portfolio website for an independent medical practitioner to connect with patients.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
      external: "https://doctor-sample-website.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      overview: "A personal digital presence crafted for a doctor to showcase expertise, specialties, and patient care philosophy.",
      problem: "Individual doctors often rely solely on hospital directories, missing the opportunity to build a personal brand and connect directly with their patient base.",
      solution: "Created a welcoming, straightforward personal website that highlights credentials, patient testimonials, and direct contact options in a clean interface.",
      results: [
        "Stronger personal brand within the medical community",
        "Direct channel for patient communication and inquiries",
        "Increased credibility through highlighted expertise"
      ]
    },
    {
      title: "Coaching Center Website",
      category: "Education",
      description: "A dynamic, engaging platform for an educational institute to showcase courses and enroll students.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      external: "https://coaching-center-sample-website.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      overview: "An educational platform designed to attract students, highlight curriculum excellence, and facilitate enrollment.",
      problem: "Educational centers face high competition and need a modern way to showcase their success stories, faculty, and course offerings to prospective students.",
      solution: "Designed an energetic and informative website featuring clear course structures, success stories, and easy-to-navigate enrollment procedures.",
      results: [
        "Higher student engagement and inquiry rates",
        "Clearer presentation of course offerings and schedules",
        "Modernized brand image for the educational institution"
      ]
    }
  ]

  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Previous Works &<br /><span className="text-secondary">Case Studies</span></h2>
            <p className="text-muted-foreground text-lg">
              A selection of our latest deployments and real-world results.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col relative glass-card rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(0,230,118,0.3)] transition-all duration-500 bg-card/40 border border-white/5 h-full">

              {/* Live Indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Project</span>
              </div>

              <Link href={project.external} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">Visit Live Website</span>
              </Link>

              <div className="flex flex-col flex-1 relative z-0">
                {/* Image Section */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                    <span className="bg-primary text-background font-black px-4 py-2 rounded-full flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_20px_rgba(0,230,118,0.4)] text-xs">
                      Visit Website <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-lg font-black mb-3 group-hover:text-primary transition-colors leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-border/50 relative z-20">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Case Study Modal Trigger - Higher Z-index to intercept click */}
                    <div onClick={(e) => e.stopPropagation()}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary hover:text-background transition-all font-bold">
                            View details
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border/50 rounded-[2rem]">
                          <div className="max-h-[85vh] overflow-y-auto w-full">
                            {/* Header Image */}
                            <div className="relative h-[250px] w-full">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                              <div className="absolute bottom-6 left-8">
                                <Badge className="bg-primary text-background mb-3">{project.category}</Badge>
                                <h2 className="text-3xl font-black text-white">{project.title}</h2>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 space-y-10">
                              <section>
                                <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">1. Overview</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                  {project.overview}
                                </p>
                              </section>

                              <div className="grid md:grid-cols-2 gap-10">
                                <section>
                                  <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">2. The Problem</h3>
                                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                                    {project.problem}
                                  </p>
                                </section>

                                <section>
                                  <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">3. Our Solution</h3>
                                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                                    {project.solution}
                                  </p>
                                </section>
                              </div>

                              <section>
                                <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">4. The Result</h3>
                                <ul className="space-y-4">
                                  {project.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-foreground">
                                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                      <span className="text-[15px]">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </section>

                              <section className="bg-background/50 p-6 rounded-2xl border border-border/50">
                                <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">5. Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="border-primary/20 bg-background text-foreground">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </section>

                              {/* CTA */}
                              <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <div>
                                  <h4 className="font-bold mb-1">Ready to see it in action?</h4>
                                  <p className="text-sm text-muted-foreground">View the live deployment.</p>
                                </div>
                                <Button asChild className="bg-primary text-background hover:bg-secondary font-black px-8 h-12 rounded-full transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                                  <Link href={project.external} target="_blank" rel="noopener noreferrer">
                                    Visit Live Website <ExternalLink className="ml-2 w-4 h-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

