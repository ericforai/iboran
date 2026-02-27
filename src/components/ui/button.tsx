"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/utilities/ui" // Changed from @/lib/utils to match existing import

/* ========================================
   Micro-Skeuomorphic Design System - Button
   ======================================== */

const BUTTON_STYLES = {
  default: {
    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, color-mix(in srgb, hsl(var(--primary)) 85%, black) 50%, color-mix(in srgb, hsl(var(--primary)) 70%, black) 100%)',
    boxShadow: '0 4px 12px color-mix(in srgb, hsl(var(--primary)) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
    hoverBoxShadow: '0 6px 20px color-mix(in srgb, hsl(var(--primary)) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
  },
  primary: {
    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, color-mix(in srgb, hsl(var(--primary)) 85%, black) 50%, color-mix(in srgb, hsl(var(--primary)) 70%, black) 100%)',
    boxShadow: '0 4px 12px color-mix(in srgb, hsl(var(--primary)) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
    hoverBoxShadow: '0 6px 20px color-mix(in srgb, hsl(var(--primary)) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
  },
  destructive: {
    background: 'linear-gradient(135deg, hsl(var(--destructive)) 0%, color-mix(in srgb, hsl(var(--destructive)) 85%, black) 50%, color-mix(in srgb, hsl(var(--destructive)) 70%, black) 100%)',
    boxShadow: '0 4px 12px color-mix(in srgb, hsl(var(--destructive)) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
    hoverBoxShadow: '0 6px 20px color-mix(in srgb, hsl(var(--destructive)) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
  },
  accent: {
    background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, color-mix(in srgb, hsl(var(--accent)) 85%, black) 50%, color-mix(in srgb, hsl(var(--accent)) 70%, black) 100%)',
    boxShadow: '0 4px 12px color-mix(in srgb, hsl(var(--accent)) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
    hoverBoxShadow: '0 6px 20px color-mix(in srgb, hsl(var(--accent)) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
  },
  secondary: {
    background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, color-mix(in srgb, hsl(var(--secondary)) 90%, black) 50%, color-mix(in srgb, hsl(var(--secondary)) 80%, black) 100%)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)',
    hoverBoxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.08)',
  },
  outline: {
    background: 'transparent',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
    hoverBoxShadow: '0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
  },
  ghost: {
    background: 'transparent',
    boxShadow: 'none',
    hoverBoxShadow: 'none',
  },
  link: {
    background: 'transparent',
    boxShadow: 'none',
    hoverBoxShadow: 'none',
  },
} as const

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.97] hover:scale-[1.02]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        primary: "text-primary-foreground",
        destructive: "text-destructive-foreground",
        accent: "text-accent-foreground",
        secondary: "text-secondary-foreground",
        outline: "border border-input bg-background text-foreground hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-4 text-xs rounded-xl",
        default: "h-9 px-5 py-2 rounded-2xl",
        md: "h-10 px-6 py-2.5 rounded-2xl",
        lg: "h-12 px-10 rounded-2xl",
        xl: "h-14 px-12 py-4 text-lg rounded-3xl",
        icon: "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, isLoading = false, leftIcon, rightIcon, children, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [isHovered, setIsHovered] = React.useState(false)

    // @ts-expect-error - Variant indexing
    const styleConfig = BUTTON_STYLES[variant] || BUTTON_STYLES.default
    // @ts-expect-error - Variant check
    const needsCustomStyle = !['ghost', 'link'].includes(variant)

    const combinedStyle = needsCustomStyle ? {
      background: styleConfig.background,
      boxShadow: isHovered ? styleConfig.hoverBoxShadow : styleConfig.boxShadow,
      ...style,
    } : style

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        style={combinedStyle}
        onMouseEnter={(e) => { setIsHovered(true); props.onMouseEnter?.(e) }}
        onMouseLeave={(e) => { setIsHovered(false); props.onMouseLeave?.(e) }}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : leftIcon}
            {children}
            {!isLoading && rightIcon}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
