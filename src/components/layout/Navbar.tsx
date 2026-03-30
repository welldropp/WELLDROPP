"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/Logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Block body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mobileMenu = mounted ? createPortal(
    <div
      className={cn(
        "lg:hidden fixed inset-0 z-[99999] bg-background/98 backdrop-blur-3xl flex flex-col justify-center items-center p-8 transition-all duration-500 ease-in-out",
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}
    >
      {/* Close button inside the portal to ensure it's always top-right of viewport */}
      <button
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all active:scale-95 shadow-lg"
        onClick={() => setIsOpen(false)}
        aria-label="Close Menu"
      >
        <X size={26} />
      </button>

      <div className="flex flex-col gap-6 text-center w-full max-w-md">
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-4xl md:text-5xl font-black transition-all duration-300 transform hover:text-primary",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${i * 75}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        <div className={cn(
          "mt-12 transition-all duration-700 delay-500 w-full",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Button asChild size="lg" className="w-full h-16 rounded-full font-black text-xl shadow-[0_15px_30px_rgba(0,230,118,0.2)]">
            <Link href="#contact" onClick={() => setIsOpen(false)}>Start Your Project</Link>
          </Button>
        </div>
      </div>

      {/* Decorative element for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none" />
    </div>,
    document.body
  ) : null

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4" : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center group relative z-[100]">
          <Logo size="sm" className="transition-transform group-hover:scale-105 duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </div>
          <Button asChild className="bg-primary text-background hover:bg-secondary font-black rounded-full px-8 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_rgba(0,230,118,0.2)]">
            <Link href="#contact">Get Started →</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[100] w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-foreground transition-all active:scale-95 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} className="text-primary opacity-0" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Render Portal Content */}
      {mobileMenu}
    </nav>
  )
}
