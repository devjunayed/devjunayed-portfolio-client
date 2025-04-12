/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const AuthRoutes = ["/login"];
const roleBasedRoutes = {
    creator: [/^\/creator/]
}

type Role = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access-token")?.value;

    
    if(!accessToken){
        if(AuthRoutes.includes(pathname)){
            return NextResponse.next();
        }else{
            return NextResponse.redirect(
                new URL(`/login?redirect=${pathname}`, request.url)
            )
        }
    }


    const decode = jwtDecode(accessToken) as any;



    if(decode?.role && roleBasedRoutes[decode?.role as Role]){
        const routes = roleBasedRoutes[decode?.role as Role];

        if(routes.some((route) => pathname.match(route))){
            return NextResponse.next();
        }
    }

    console.log(decode)

    cookieStore.delete("access-token");

    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: [ "/creator/:page*",  "/login"]
}