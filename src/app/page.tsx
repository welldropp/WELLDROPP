import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { TechMarquee } from "@/components/sections/TechMarquee"
import { Services } from "@/components/sections/Services"
import { Stats } from "@/components/sections/Stats"
import { Capabilities } from "@/components/sections/Capabilities"
import { Research } from "@/components/sections/Research"
import { Portfolio } from "@/components/sections/Portfolio"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MsmeLogo } from "@/components/ui/MsmeLogo"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <Hero />

      <TechMarquee />

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Built by builders,<br />
                <span className="text-gradient">for builders.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Welldropp was born from a simple belief: AI should be accessible, precision-engineered, and actually useful. We build intelligent systems that solve real-world operational challenges.
              </p>
              <Button
                asChild
                className="h-12 px-8 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-px transition-all"
              >
                <Link href="#contact">Partner With Us</Link>
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="glass-card p-10 rounded-2xl relative overflow-hidden group border border-primary/10">
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-8 relative z-10">
                  {[
                    { icon: "⚡", title: "Precision Engineering", text: "Every solution is scoped, designed, and deployed with intent. No bloat — just systems that work." },
                    { icon: "🔬", title: "Research-Backed", text: "Our ML/DL team actively researches the latest models — what we build is always cutting-edge." },
                    { icon: "🌱", title: "Startup Mindset", text: "We move fast, iterate faster, and treat every client's problem like our own startup challenge." },
                    { icon: "🔒", title: "Secure by Default", text: "Enterprise-grade security baked into every product — your data is always protected." }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-5">
                      <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mt-24 pt-16 border-t border-border/50">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:max-w-lg">
                <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">Our Credentials</p>
                <h3 className="text-3xl md:text-4xl font-black mb-4">Certified &amp; Reliable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We adhere to government compliance standards, ensuring our operations are robust, legitimate, and trustworthy.
                </p>
              </div>

              <div className="glass-card p-6 md:p-10 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full lg:w-auto hover:border-primary/30 transition-all group relative overflow-hidden border border-border">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/8 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700" />

                <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full bg-white rounded-full p-2 shadow-xl group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <MsmeLogo size={80} />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1 max-w-sm relative z-10">
                  <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] block mb-3">Compliance &amp; Reliability</span>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    <strong className="text-foreground">Welldropp</strong> is a government registered MSME enterprise, ensuring bank-grade reliability and process compliance for all operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Stats />
      <Capabilities />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Research />
      <Contact />

      <Footer />
      <Toaster />
    </main>
  )
}
