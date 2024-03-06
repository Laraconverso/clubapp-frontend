import "../globals.css"
import { Inter } from "next/font/google";
import AdminHeader from "./components/AdminHeader";
import AdminOptionsMobile from "./components/AdminOptionsMobile";
import { cookies } from "next/headers";
import LoginAdmin from "./forms/LoginAdmin";
import background from "@public/primaryBG.png"
import Image from "next/image";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Administrador"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adminAuth = cookies().has("adminAuth");

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap" rel="stylesheet" />
      </head>

      <body className={`${inter.className} relative grid auto-rows-[auto_1fr_auto] bg-baltic-sea-300 max-w-screen min-h-screen overflow-x-hidden text-baltic-sea-950`}>

        <figure className="fixed top-0 h-full w-full -z-10 overflow-hidden">
          <Image src={background} alt={"ClubApp background"} fill={true}/>
        </figure>
        <AdminHeader />
        {
          !adminAuth ? <LoginAdmin />
            :
            <main className="relative h-full w-full">{children}</main>
        }
        <AdminOptionsMobile />
      </body>
    </html>
  )
}
