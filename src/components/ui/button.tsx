import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-11 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default: 'rounded bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'rounded bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'rounded hover:bg-card hover:text-accent-foreground',
        link: 'text-primary items-start justify-start underline-offset-4 hover:underline',
        outline: 'rounded border border-border bg-background hover:bg-card hover:text-accent-foreground',
        secondary: 'rounded bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // Neumorphism Primary - Accent color with extruded shadow
        neu: 'bg-[#6C63FF] text-white rounded-2xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[inset_6px_6px_10px_rgba(108,99,255,0.4),inset_-6px_-6px_10px_rgba(139,132,255,0.4)] duration-300 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-[#E0E5EC]',
        // Neumorphism Secondary - Background matching with extruded shadow
        neuSecondary: 'bg-[#E0E5EC] text-[#3D4852] rounded-2xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)] duration-300 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-[#E0E5EC]',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }
