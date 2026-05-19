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
        "Improved local search visibility for healthcare providers",
      ],
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
        "Enhanced digital presence and search visibility",
      ],
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
        "Increased credibility through highlighted expertise",
      ],
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
        "Modernized brand image for the educational institution",
      ],
    },
  ]

  return (
    <section id="works" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Previous Works &{" "}
              <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-muted-foreground text-base">
              A selection of our latest deployments and real-world results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col relative rounded-xl border border-border bg-card/40 overflow-hidden hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 h-full"
            >
              {/* Live Indicator */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[9px] font-semibold text-white uppercase tracking-wider">Live</span>
              </div>

              <Link href={project.external} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">Visit Live Website</span>
              </Link>

              <div className="flex flex-col flex-1 relative z-0">
                {/* Image */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                    <span className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 shadow-lg text-xs">
                      Visit Website <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-widest mb-1.5">{project.category}</p>
                    <h3 className="text-sm font-bold mb-2 group-hover:text-blue-300 transition-colors leading-snug">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-border/40 relative z-20">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-500/8 text-blue-400/80 border border-blue-500/15 text-[9px] uppercase font-semibold px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-lg border-border/60 hover:border-blue-500/50 hover:bg-blue-500/5 text-xs font-semibold h-8 px-3 transition-all"
                          >
                            Details
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border rounded-2xl">
                          <div className="max-h-[85vh] overflow-y-auto w-full">
                            <div className="relative h-[220px] w-full">
                              <Image src={project.image} alt={project.title} fill className="object-cover opacity-75" />
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                              <div className="absolute bottom-5 left-6">
                                <Badge className="bg-blue-600 text-white mb-2 text-[10px]">{project.category}</Badge>
                                <h2 className="text-2xl font-black text-white">{project.title}</h2>
                              </div>
                            </div>

                            <div className="p-8 space-y-8">
                              <section>
                                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Overview</h3>
                                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                              </section>

                              <div className="grid md:grid-cols-2 gap-8">
                                <section>
                                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">The Problem</h3>
                                  <p className="text-muted-foreground leading-relaxed text-sm">{project.problem}</p>
                                </section>
                                <section>
                                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Our Solution</h3>
                                  <p className="text-muted-foreground leading-relaxed text-sm">{project.solution}</p>
                                </section>
                              </div>

                              <section>
                                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Results</h3>
                                <ul className="space-y-3">
                                  {project.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                      <span className="text-sm text-foreground/85">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </section>

                              <section className="bg-background/50 p-5 rounded-xl border border-border/50">
                                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="border-blue-500/20 bg-blue-500/5 text-foreground text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </section>

                              <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-sm mb-1">Ready to see it in action?</h4>
                                  <p className="text-xs text-muted-foreground">View the live deployment.</p>
                                </div>
                                <Button asChild className="bg-blue-600 text-white hover:bg-blue-500 font-semibold px-7 h-11 rounded-xl shadow-lg shadow-blue-600/20 w-full sm:w-auto">
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
