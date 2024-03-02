import "../globals.css"
import { Inter } from "next/font/google";
import AdminHeader from "./components/AdminHeader";
import AdminOptionsMobile from "./components/AdminOptionsMobile";
import { cookies } from "next/headers";
import LoginAdmin from "./forms/LoginAdmin";
import background from "@public/primaryBG.png"
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });


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

      <body className={`${inter.className}relative bg-baltic-sea-300 min-h-screen overflow-x-hidden pb-20`}>

        <figure className="fixed inset-0 object-cover -z-10">
          <Image src={background} alt={"ClubApp background"} />
        </figure>
        <AdminHeader />
        {
          !adminAuth ? <LoginAdmin />
            :
            <main className="relative">{children}</main>
        }
        <AdminOptionsMobile />
      </body>
    </html>
  )
}
