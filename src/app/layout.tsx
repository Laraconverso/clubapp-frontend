import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import Header from "@/components/header/Header";

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
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
        <Header/>
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
