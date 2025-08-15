import * as React from 'react'
import clsx from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp: any = asChild ? 'span' : 'button'
    return (
      <Comp
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white font-medium transition',
          'hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'