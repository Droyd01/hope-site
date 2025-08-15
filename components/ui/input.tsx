import * as React from 'react'
import clsx from 'clsx'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'block w-full rounded-lg border px-3 py-2',
        'focus-visible:outline-2 focus-visible:outline-primary',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'