import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const basicAuth = req.cookies.get("satifauth");
  const satifauth = basicAuth?.value;
  console.log(basicAuth?.value);
  //   Auth redirect
  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register")
  ) {
    if (satifauth) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    return NextResponse.next();
  }
  if (satifauth) {
    const API_URL = process.env.URL;
    const data = await fetch(`https://admission-jiu-five.vercel.app/api/auth/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: "satifauth=" + satifauth,
      },
    }).then((response) => response.json());
    if (data.status) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    console.log(data.status);
    //   const auth = basicAuth.split(' ')[1]
    //   const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    //   if (user === 'mydmin' && pwd === 'mypassword') {
    //     return NextResponse.next()
    //   }
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
