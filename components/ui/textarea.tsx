import * as React from 'react'
import clsx from 'clsx'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx('block w-full rounded-lg border px-3 py-2 min-h-[120px]', 'focus-visible:outline-2 focus-visible:outline-primary', className)}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'