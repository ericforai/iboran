import * as React from "react"
import { cn } from "@/utilities/ui"

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
  variant?: 'raised' | 'flat' | 'inset' | 'dark'
}

export const NeuCard = React.forwardRef<HTMLDivElement, NeuCardProps>(
  ({ className, children, interactive = true, variant = 'raised', ...props }, ref) => {
    
    // Base surface styles
    const baseStyles = "relative rounded-[32px] overflow-hidden border border-white/40 isolate transition-all duration-300"
    
    // Variant styles
    const variants = {
      raised: "neu-surface-gradient neu-shadow-physical",
      flat: "bg-white/80 border-slate-200/60 shadow-sm",
      inset: "bg-slate-50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border-transparent",
      dark: "bg-slate-900 neu-shadow-physical text-white border-slate-800"
    }

    // Interactive Hover States
    const interactiveStyles = interactive ? 
      "hover:neu-shadow-physical-hover hover:scale-[1.002] hover:-translate-y-1 active:scale-[0.99] active:translate-y-0" : ""

    return (
      <div 
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          interactiveStyles,
          className
        )} 
        {...props}
      >
        {/* Top Highlight (Rim Light) */}
        <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/60 pointer-events-none z-10" />
        
        {/* Content */}
        <div className="relative z-0">
          {children}
        </div>
      </div>
    )
  }
)
NeuCard.displayName = "NeuCard"
