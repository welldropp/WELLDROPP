"use client"

import Link from "next/link"
import * as React from "react"
import { Logo } from "@/components/ui/Logo"
import { MsmeLogo } from "@/components/ui/MsmeLogo"

export function Footer() {
  const [year, setYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Logo size="md" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Build Smarter AI. Deploy Faster. — Precision-engineered AI solutions for modern businesses. From agents to e-commerce, we build it all.
            </p>
            <p className="text-muted-foreground/50 text-xs mb-8">
              Coimbatore, Tamil Nadu, India
            </p>

            {/* MSME Credential Badge */}
            <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4 flex items-center gap-4 max-w-xs hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-300 group">
              <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <MsmeLogo size={44} className="relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-[9px] block mb-1">Government Registered</span>
                <p className="text-[11px] text-muted-foreground leading-snug group-hover:text-foreground/80 transition-colors">
                  <strong className="text-foreground/90">Welldropp</strong> — Certified MSME (Udyam) enterprise.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-5">Services</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">AI Agents &amp; Bots</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">MLOps &amp; Research</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">E-Commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-5">Company</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#research" className="hover:text-blue-400 transition-colors">Research Lab</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#works" className="hover:text-blue-400 transition-colors">Our Work</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-5">Legal</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground flex flex-col items-start">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">
            © {year || '2025'} Welldropp Technologies. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { label: '𝕏', href: 'https://x.com/welldropp', title: 'Follow us on X (Twitter)' },
              { label: 'in', href: 'https://linkedin.com/company/welldropp', title: 'Connect on LinkedIn' },
              { label: 'gh', href: 'https://github.com/welldropp', title: 'View on GitHub' },
              { label: 'tg', href: 'https://t.me/welldropp', title: 'Join us on Telegram' },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                aria-label={social.title}
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center font-bold text-sm text-muted-foreground hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 transition-all"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
