"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Star,
  Github,
  ArrowRight,
  Bot,
  Server,
  LayoutTemplate,
  FlaskConical,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  Users,
  Microscope,
  Mail,
  Shield,
  FileText,
  Cookie,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/Logo"
import { cn } from "@/lib/utils"

// ── Menu data ─────────────────────────────────────────────────────
type MegaLink = {
  name: string
  href: string
  description: string
  icon: LucideIcon
}

type MegaColumn = {
  title: string
  links: MegaLink[]
}

type NavItem =
  | { name: string; href: string }
  | { name: string; columns: MegaColumn[] }

const navItems: NavItem[] = [
  {
    name: "Services",
    columns: [
      {
        title: "Build",
        links: [
          {
            name: "Agentic AI Systems",
            href: "#services",
            description: "Autonomous agents that get real work done.",
            icon: Bot,
          },
          {
            name: "Webservice & APIs",
            href: "#services",
            description: "Scalable backends and clean API design.",
            icon: Server,
          },
          {
            name: "AI Website Builder",
            href: "#services",
            description: "Stunning sites generated and shipped fast.",
            icon: LayoutTemplate,
          },
          {
            name: "ML/DL Research",
            href: "#services",
            description: "Cutting-edge models tuned to your data.",
            icon: FlaskConical,
          },
        ],
      },
      {
        title: "Automate",
        links: [
          {
            name: "Customer Care Chatbots",
            href: "#services",
            description: "24/7 support across every channel.",
            icon: MessageSquare,
          },
          {
            name: "Analytics Dashboard",
            href: "#services",
            description: "Live insights from all your data sources.",
            icon: BarChart3,
          },
          {
            name: "E-Commerce Platform",
            href: "#services",
            description: "Conversion-focused storefronts that sell.",
            icon: ShoppingCart,
          },
        ],
      },
    ],
  },
  {
    name: "Works",
    columns: [
      {
        title: "ML/DL Projects",
        links: [
          {
            name: "Tode",
            href: "https://github.com/welldropp/tode",
            description: "Advanced ML model implementation.",
            icon: Bot,
          },
          {
            name: "Tede Annotation v1",
            href: "https://github.com/welldropp/tede_annotation.v1",
            description: "Data annotation tools for ML.",
            icon: Microscope,
          },
        ],
      },
      {
        title: "Web Development",
        links: [
          {
            name: "Clinic Website",
            href: "https://clinic-sample-website-six.vercel.app/",
            description: "Healthcare platform for patient booking.",
            icon: LayoutTemplate,
          },
          {
            name: "Advocate Website",
            href: "https://sampleadvocatewesite.vercel.app/",
            description: "Modern legal professional presence.",
            icon: LayoutTemplate,
          },
          {
            name: "Doctor Website",
            href: "https://doctor-sample-website.vercel.app/",
            description: "Personal portfolio for medical practitioners.",
            icon: LayoutTemplate,
          },
          {
            name: "Coaching Center",
            href: "https://coaching-center-sample-website.vercel.app/",
            description: "Educational platform for student enrollment.",
            icon: LayoutTemplate,
          },
        ],
      },
    ],
  },
  {
    name: "Company",
    columns: [
      {
        title: "About",
        links: [
          {
            name: "Who We Are",
            href: "#about",
            description: "Builders crafting intelligent systems.",
            icon: Users,
          },
          {
            name: "Research Lab",
            href: "#research",
            description: "Where we push the AI frontier.",
            icon: Microscope,
          },
          {
            name: "Contact Us",
            href: "#contact",
            description: "Let's talk about your next project.",
            icon: Mail,
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            name: "Privacy Policy",
            href: "/privacy-policy",
            description: "How we handle and protect your data.",
            icon: Shield,
          },
          {
            name: "Terms",
            href: "/terms",
            description: "The terms that govern our services.",
            icon: FileText,
          },
          {
            name: "Cookie Policy",
            href: "/cookie-policy",
            description: "How and why we use cookies.",
            icon: Cookie,
          },
        ],
      },
    ],
  },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

const GITHUB_URL = "https://github.com/welldropp"

function hasColumns(item: NavItem): item is { name: string; columns: MegaColumn[] } {
  return "columns" in item
}

// ── Announcement banner ───────────────────────────────────────────
function AnnouncementBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="relative w-full bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-3 px-6 md:px-12 lg:px-20 py-2.5 text-center">
        <Sparkles size={16} className="shrink-0 animate-pulse" />
        <p className="text-xs md:text-sm font-bold tracking-wide">
          Meet WELLDROPP Agentic AI — ship intelligent systems in days, not months.
        </p>
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 text-xs md:text-sm font-black underline-offset-4 hover:underline"
        >
          Get in touch <ArrowRight size={14} />
        </Link>
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss announcement"
        className="absolute top-1/2 right-4 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-lg bg-black/10 hover:bg-black/20 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}

// ── Mega-menu dropdown panel ──────────────────────────────────────
function MegaMenu({ columns }: { columns: MegaColumn[] }) {
  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-50">
      <div className="rounded-3xl p-6 shadow-2xl shadow-black/60 bg-background border border-white/10 min-w-[34rem]">
        <div className="grid grid-cols-2 gap-8">
          {columns.map((col) => (
            <div key={col.title} className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 px-3 mb-2">
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 rounded-2xl p-3 hover:bg-white/5 transition-colors group/item"
                >
                  <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover/item:scale-110 group-hover/item:bg-primary/20 transition-all">
                    <link.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                      {link.name}
                    </span>
                    <span className="block text-xs text-muted-foreground leading-snug">
                      {link.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [bannerVisible, setBannerVisible] = React.useState(true)
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Block body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => {
    setIsOpen(false)
    setOpenAccordion(null)
  }

  // ── Mobile accordion menu (portal-based full-screen) ────────────
  const mobileMenu = mounted
    ? createPortal(
        <div
          className={cn(
            "lg:hidden fixed inset-0 z-[99999] bg-background/98 backdrop-blur-3xl flex flex-col p-6 transition-all duration-500 ease-in-out overflow-y-auto",
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <Logo size="sm" />
            <button
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all active:scale-95 shadow-lg"
              onClick={closeMobile}
              aria-label="Close Menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-md mx-auto">
            {navItems.map((item, i) => {
              const baseDelay = `${i * 60}ms`
              if (!hasColumns(item)) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      "py-4 px-4 text-2xl font-black border-b border-white/5 transition-all duration-300 hover:text-primary",
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    )}
                    style={{ transitionDelay: baseDelay }}
                  >
                    {item.name}
                  </Link>
                )
              }

              const expanded = openAccordion === item.name
              return (
                <div
                  key={item.name}
                  className={cn(
                    "border-b border-white/5 transition-all duration-300",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  )}
                  style={{ transitionDelay: baseDelay }}
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(expanded ? null : item.name)
                    }
                    className="w-full flex items-center justify-between py-4 px-4 text-2xl font-black hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      size={24}
                      className={cn(
                        "transition-transform duration-300",
                        expanded && "rotate-180 text-primary"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expanded ? "max-h-[40rem]" : "max-h-0"
                    )}
                  >
                    <div className="pb-4 px-4 space-y-5">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 mb-2">
                            {col.title}
                          </p>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMobile}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-3 py-2 rounded-xl hover:bg-white/5 transition-colors group/m"
                              >
                                <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                  <link.icon size={16} />
                                </span>
                                <span className="text-sm font-bold text-muted-foreground group-hover/m:text-primary transition-colors">
                                  {link.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className={cn(
                "mt-6 flex items-center justify-center gap-2 h-14 rounded-full glass font-bold transition-all duration-300",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${navItems.length * 60}ms` }}
            >
              <Github size={20} />
              <span>Star on GitHub</span>
              <Star size={16} className="text-primary fill-primary" />
            </a>

            <Button
              asChild
              size="lg"
              className={cn(
                "mt-3 w-full h-16 rounded-full font-black text-xl shadow-[0_15px_30px_rgba(0,230,118,0.2)] transition-all duration-700",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <Link href="#contact" onClick={closeMobile}>
                Get Started
              </Link>
            </Button>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none" />
        </div>,
        document.body
      )
    : null

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {bannerVisible && (
        <AnnouncementBanner onDismiss={() => setBannerVisible(false)} />
      )}

      <nav
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4"
            : "bg-transparent py-4 md:py-5"
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center group relative z-[100]">
            <Logo
              size="sm"
              className="transition-transform group-hover:scale-105 duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) =>
              hasColumns(item) ? (
                <div key={item.name} className="relative group/nav">
                  <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover/nav:rotate-180"
                    />
                  </button>
                  <MegaMenu columns={item.columns} />
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[13px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 relative group/link"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/link:w-[calc(100%-2rem)]" />
                </Link>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-foreground hover:border-primary/40 transition-all hover:translate-y-[-2px]"
            >
              <Github size={16} />
              <span className="flex items-center gap-1">
                <Star size={14} className="text-primary fill-primary" />
                Star
              </span>
            </a>
            <Button
              asChild
              className="bg-primary text-background hover:bg-secondary font-black rounded-full px-7 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_rgba(0,230,118,0.2)]"
            >
              <Link href="#contact">
                Get Started <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-[100] w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-foreground transition-all active:scale-95 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {mobileMenu}
    </header>
  )
}
