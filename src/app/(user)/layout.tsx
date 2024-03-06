import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import bgImage from '@public/primaryBG.png'
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club App",
  description: "Proyecto final integrador",
};

export default function RootLayout(props: {
  children: ReactNode
}) {

  
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className}relative bg-baltic-sea-300 min-h-screen overflow-x-hidden`}>
      <figure className="fixed inset-0 object-cover -z-10">
          <Image src={bgImage} alt={"ClubApp background"} className="w-full h-full"/>
        </figure>
        <Header/>
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
