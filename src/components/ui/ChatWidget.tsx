"use client"

import * as React from "react"
import { MessageCircle, X, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isRendered, setIsRendered] = React.useState(false)

  // Lazy render the iframe when opened the first time
  React.useEffect(() => {
    if (isOpen && !isRendered) {
      setIsRendered(true)
    }
  }, [isOpen, isRendered])

  // Optional: Prevent background scrolling when overlay is active
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Floating Toggle Button (Hidden when overlay is fully open) */}
      <div className={cn(
        "fixed bottom-6 right-6 z-[99990] transition-all duration-300 pointer-events-auto",
        isOpen ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
      )}>
        <Button
          size="icon"
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-[2rem] bg-primary text-primary-foreground shadow-[0_10px_40px_rgba(0,230,118,0.3)] hover:scale-110 active:scale-90 transition-all duration-500 group"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute -top-3 -right-3 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-secondary flex items-center justify-center text-[8px] font-black text-background">1</span>
            </span>
          </div>
        </Button>
      </div>

      {/* Full Screen Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[99999] flex flex-col bg-background/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100%] pointer-events-none"
        )}
      >
        {/* Header Bar */}
        <div className="flex-none h-16 bg-card border-b border-white/10 flex items-center justify-between px-4 sm:px-6 shadow-md">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:bg-white/5 hover:text-foreground -ml-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold tracking-tight text-foreground">Welldropp AI Assistant</h2>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Active Now
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:bg-white/5 hover:text-destructive"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Embedded iframe */}
        <div className="flex-1 w-full bg-background relative">
          {/* Loading Skeleton underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background z-0 pointer-events-none opacity-50">
             <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
             <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Loading AI Assistant...</p>
          </div>
          
          {isRendered && (
            <iframe
              title="Welldropp Chatbot"
              src="https://chatbot-bice-sigma-33.vercel.app/"
              className={cn(
                "w-full h-full border-none z-10 relative bg-transparent transition-opacity duration-500",
                isOpen ? "opacity-100" : "opacity-0"
              )}
              allow="microphone; clipboard-read; clipboard-write"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </>
  )
}
