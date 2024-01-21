import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
// import { getSession } from "next-auth/react";
// import getCurrentUser from "./utils/utils";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // return NextResponse
    if (req.nextUrl.pathname.startsWith("/checkout")) {
      return NextResponse.rewrite(new URL("/checkout", req.url));
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log(token);
        if (!token) return false;
        return true;
      },
    },
  }
);

// export { default } from "next-auth/middleware";
// let loged: any;
// async function name() {
//   loged = await getCurrentUser();
// }

// name();

// export async function middleware(req: NextRequest) {
//   // console.log(req.url.startsWith("/") as string);
//   //   const session = await getServerSession(authOptions);
//   // console.log(session);
//   const session = await getSession();
//   console.log(session);
//   const logged = req.cookies.get("user");

//   // console.log(logged);
//   // console.log(req.cookies.get("user"));

//   if (req.nextUrl.pathname.startsWith("/checkout") && loged) {
//     console.log(logged);
//     req.cookies.delete("user");
//     const response = NextResponse.rewrite(new URL("/checkout", req.url));
//     req.cookies.delete("user");
//     return response;
//   }

//   if (req.nextUrl.pathname.startsWith("/checkout") && !loged) {
//     console.log(`asda`);
//     return NextResponse.rewrite(new URL("/sign-in", req.url));
//   }

//   //   // else {
//   //   //   return NextResponse.redirect(new URL("/sign-in", req.url));
//   //   // }

//   //   // return NextResponse.rewrite(new URL("/sign-in", req.url));
// }

export const config = {
  matcher: ["/checkout", "/orders/:path"],
};
