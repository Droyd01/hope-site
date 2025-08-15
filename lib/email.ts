type Mail = { from: string; to: string; subject: string; html: string }

export async function sendEmail(mail: Mail) {
  if (process.env.EMAIL_PROVIDER === 'resend') {
    const { Resend } = await import('@resend/node')
    const client = new Resend(process.env.RESEND_API_KEY || '')
    if (!process.env.RESEND_API_KEY) { throw new Error('RESEND_API_KEY missing') }
    await client.emails.send(mail as any)
  } else if (process.env.EMAIL_PROVIDER === 'smtp') {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER || '', pass: process.env.SMTP_PASS || '' }
    })
    await transporter.sendMail(mail as any)
  } else {
    throw new Error('EMAIL_PROVIDER not set')
  }
}