import { defineConfig } from '@playwright/test'
export default defineConfig({
  webServer: { command: 'npm run build && npm start', url: 'http://localhost:3000', reuseExistingServer: !process.env.CI },
  use: { headless: true, baseURL: 'http://localhost:3000' }
})