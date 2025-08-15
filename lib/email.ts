type Mail = { from: string; to: string; subject: string; html: string }

export async function sendEmail(mail: Mail) {
  if (process.env.EMAIL_PROVIDER === 'resend') {
    const { Resend } = await import('resend') // ✅ correct package name
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) throw new Error('RESEND_API_KEY missing')
    const client = new Resend(apiKey)
    await client.emails.send(mail as any)
    return
  }

  if (process.env.EMAIL_PROVIDER === 'smtp') {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || ''
      }
    })
    await transporter.sendMail(mail as any)
    return
  }

  throw new Error('EMAIL_PROVIDER not set (use "resend" or "smtp")')
}
