// inert middleware: never runs because the matcher doesn't match anything real
import { NextResponse } from 'next/server'
export function middleware() { return NextResponse.next() }
export const config = { matcher: ['/__never__'] }
