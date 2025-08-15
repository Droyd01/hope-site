import { test, expect } from '@playwright/test'

test('nav works and home loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'HOPE' })).toBeVisible()
  await page.getByRole('link', { name: 'Participate' }).click()
  await expect(page).toHaveURL('/participants')
})

test('contact form validation', async ({ page }) => {
  await page.goto('/contact')
  await page.getByLabel('Name').fill('A')
  await page.getByLabel('Email').fill('not-an-email')
  await page.getByLabel('Message').fill('Hi')
  await page.getByRole('button', { name: /send/i }).click()
  await expect(page.getByText(/please enter your name/i)).toBeVisible()
})

test('404 route', async ({ page }) => {
  await page.goto('/nope', { waitUntil: 'networkidle' })
  expect(page.url()).toContain('/nope')
})