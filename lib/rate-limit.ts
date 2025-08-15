const hits = new Map<string, { count: number; ts: number }>()
const WINDOW = 60_000
const MAX = 5

export async function rateLimit(key: string) {
  const now = Date.now()
  const item = hits.get(key) || { count: 0, ts: now }
  if (now - item.ts > WINDOW) { item.count = 0; item.ts = now }
  item.count++
  hits.set(key, item)
  return item.count <= MAX
}