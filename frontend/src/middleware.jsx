
import { NextResponse } from 'next/server'
import React from 'react'



export function middleware(request) {
    // if (request.nextUrl.pathname.startsWith('/user/profile')) {
    //     return NextResponse.rewrite(new URL('/user-signup', request.url))
    //   }
    //   if (request.nextUrl.pathname.startsWith('/seller')) {
    //     return NextResponse.rewrite(new URL('/seller-signup', request.url))
    //   }
    }


export const config = {
    matcher: '/user/:path*',
   
}



  
