import { NextResponse } from "next/server"
import { cookies } from "next/headers";


import axios from "axios";


export async function middleware(req, res) {
    const cookieStore = cookies();
    
    const token = await cookieStore.get('seller-token') || '';
    console.log(token.value);
    const ApiResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/seller/authorise`, {}, {
     headers:{

      'x-auth-token': token.value

     }
    });
    console.log(ApiResponse.status);
    if (ApiResponse.status !== 200) {
        return NextResponse.redirect(new URL('/seller-login', req.url));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/seller/:path*']
}