import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login"];
const roleBasedRoutes = {
    creator: [/^\/creator/]
}

type Role = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    
    const user = await getCurrentUser();
    console.log(user);
    if(!user){
        if(AuthRoutes.includes(pathname)){
            return NextResponse.next();
        }else{
            return NextResponse.redirect(
                new URL(`/login?redirect=${pathname}`, request.url)
            )
        }
    }

    if(user?.role && roleBasedRoutes[user?.role as Role]){
        const routes = roleBasedRoutes[user?.role as Role];

        if(routes.some((route) => pathname.match(route))){
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: [ "/creator",  "/login"]
}