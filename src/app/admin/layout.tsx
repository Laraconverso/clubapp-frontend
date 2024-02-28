import "../globals.css"
import { Inter } from "next/font/google";
import AdminHeader from "./components/AdminHeader";
import AdminOptionsMobile from "./components/AdminOptionsMobile";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap" rel="stylesheet" />
      </head>

      <body className={`${inter.className}  relative box-border bg-baltic-sea-300 max-w-screen  min-h-screen overflow-x-hidden`}>

        <AdminHeader />
        {children}
        <AdminOptionsMobile />
      </body>
    </html>
  )
}
