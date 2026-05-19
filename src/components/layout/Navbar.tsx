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
        "lg:hidden fixed inset-0 z-[99999] bg-[hsl(228,50%,4%)]/98 backdrop-blur-3xl flex flex-col justify-center items-center p-8 transition-all duration-500 ease-in-out",
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-400 transition-all active:scale-95 shadow-lg hover:bg-blue-500/10"
        onClick={() => setIsOpen(false)}
        aria-label="Close Menu"
      >
        <X size={22} />
      </button>

      <div className="flex flex-col gap-6 text-center w-full max-w-md">
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-4xl md:text-5xl font-black transition-all duration-300 transform hover:text-blue-400",
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
          <Button
            asChild
            size="lg"
            className="w-full h-16 rounded-xl font-black text-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all"
          >
            <Link href="#contact" onClick={() => setIsOpen(false)}>Get Started →</Link>
          </Button>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none" />
    </div>,
    document.body
  ) : null

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-[hsl(228,50%,4%)]/90 backdrop-blur-xl border-b border-blue-500/10 py-3 md:py-4"
          : "bg-transparent py-5 md:py-6"
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
                className="text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-all duration-200 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg px-6 transition-all hover:translate-y-[-1px] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]"
          >
            <Link href="#contact">Get Started →</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[100] w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground transition-all active:scale-95 hover:bg-blue-500/10 hover:border-blue-500/30"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} className="text-blue-400 opacity-0" /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenu}
    </nav>
  )
}
