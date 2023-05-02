import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import URLParse from 'url-parse'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const url = URLParse(request.url, true)
    const cookie = request.cookies.get('token')?.value

    if (
        (url.pathname === '/sign-in' ||
            url.pathname === '/sign-up' ||
            url.pathname === '/forgot-password' ||
            url.pathname === '/reset-password') &&
        cookie
    )
        return NextResponse.redirect(new URL('/', request.url))
    else if (cookie) {
        const response = NextResponse.next()
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
    matcher: '/:path*'
}
