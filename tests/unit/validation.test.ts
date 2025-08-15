import { z } from 'zod'

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(5) })

it('rejects invalid email', () => {
  const res = schema.safeParse({ name: 'Fi', email: 'nope', message: 'hello world' })
  expect(res.success).toBe(false)
})