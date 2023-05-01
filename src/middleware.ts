import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookie = request.cookies.get('token')?.value
    const response = NextResponse.next()
    if (cookie) {
        await fetch('http://localhost:3300/auth', {
            headers: {
                Authorization: `Bearer ${cookie}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                response.headers.set('account', JSON.stringify(data))
            })
            .catch((err) => {
                return NextResponse.redirect(new URL('/sign-in', request.url))
            })
        return response
    }
    return NextResponse.redirect(new URL('/sign-in', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/'
}
