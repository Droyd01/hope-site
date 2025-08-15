import clsx from 'clsx'
import * as React from 'react'
export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('rounded-xl border p-6 shadow-sm bg-white', className)}>{children}</div>
}