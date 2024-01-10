import TanstackProvider from "@/Providers/TanstackProvider";
import { Manrope } from "next/font/google";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "../styles/global.css";
import AuthProvider from "@/Providers/AuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

const manrope = Manrope({
  subsets: ["latin"],
  // display: "swap"
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Welcome to Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={manrope.className}>
      <head>
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
      </head>
      <body>
        <AuthProvider session={session}>
          <TanstackProvider>
            {children}

            <Toaster
              expand
              richColors
              position="top-center"
              duration={10000}
              style={{
                zIndex: "99999999999999999999999999999999999999999999999",
              }}
            />
    
            <div id="modal" />
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
