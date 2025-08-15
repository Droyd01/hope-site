import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  company: z.string().optional().nullable(),
  startedAt: z.string().optional().nullable()
})

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
  if (!(await rateLimit(ip))) return NextResponse.json({ error: 'Rate limit' }, { status: 429 })

  const data = await req.json()
  const parsed = schema.safeParse(data)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 })

  if (parsed.data.company) return NextResponse.json({ ok: true })

  const started = Number(parsed.data.startedAt || Date.now())
  if (Date.now() - started < 5000) return NextResponse.json({ error: 'Too fast' }, { status: 400 })

  try {
    const from = process.env.EMAIL_FROM || 'no-reply@example.org'
    const to = process.env.EMAIL_TO
    if (!to) throw new Error('EMAIL_TO missing')
    await sendEmail({
      from,
      to,
      subject: 'New contact from Hope Site',
      html: `<p><strong>Name:</strong> ${parsed.data.name}</p><p><strong>Email:</strong> ${parsed.data.email}</p><p>${parsed.data.message}</p>`
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Mail failed' }, { status: 500 })
  }
}