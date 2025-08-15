# Hope Study — Next.js 14 App

## Quickstart
```bash
npm i
cp .env.example .env.local
# set NEXT_PUBLIC_SITE_URL and email settings
npm run dev
```

## Build & run
```bash
npm run build && npm start
```

## Tests
```bash
npm run test
npm run e2e
```

### Tech
- Next.js 14 (App Router), Tailwind, accessible UI, RHF + Zod, Playwright, Vitest.

### Email
Set `EMAIL_PROVIDER=resend` and `RESEND_API_KEY`, plus `EMAIL_FROM` and `EMAIL_TO`.
Or set `EMAIL_PROVIDER=smtp` and SMTP_* envs.

### Deployment
Vercel recommended. Set env vars in Vercel dashboard. Configure custom domain and HTTPS.