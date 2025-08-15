'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const FormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(5, 'Please add a message'),
  company: z.string().optional(),
  startedAt: z.string().optional()
})

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')
  const startRef = useRef<number>(Date.now())
  useEffect(() => setValue('startedAt', String(startRef.current)), [setValue])

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      if (res.ok) { setStatus('success'); reset() } else throw new Error('Failed')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-describedby="form-status">
      <div className={compact ? 'grid sm:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="text-red-700 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="text-red-700 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className={compact ? 'sm:col-span-2' : ''}>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...register('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message && <p id="message-error" className="text-red-700 text-sm mt-1">{errors.message.message}</p>}
        </div>
      </div>

      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" {...register('company')} />
        <input type="text" {...register('startedAt')} />
      </div>

      <button className="mt-4 rounded-full bg-primary text-white px-5 py-3 disabled:opacity-50" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>

      <div id="form-status" role="status" aria-live="polite" className="mt-3 text-sm">
        {status === 'success' && <span>Thanks—your message has been sent.</span>}
        {status === 'error' && <span>Sorry, something went wrong. Please try again later.</span>}
      </div>
    </form>
  )
}