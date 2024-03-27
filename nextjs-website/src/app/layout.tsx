import type { Metadata } from "next";
import "./globals.css";

import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import {reportWebVitals} from '@/reportWebVitals'
import ThemeContextProvider from '@/contexts/ThemeContext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { headerData } from '@/data/headerData'

import localFont from 'next/font/local';
import { Footer, Navbar } from "@/components";

import {
  poppins,
  big_shoulders_text,
  roboto,
  noto_sans_tc,
  caveat
} from '@/utils/fonts';

const BestermindRegularFont = localFont({ src: '../assets/fonts/Bestermind/BestermindRegular.ttf' })

export const metadata: Metadata = {
  title: headerData.name,
  description: "Personal Portfolio & Website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <body className={`
        ${BestermindRegularFont.className} 
        ${poppins}
        ${big_shoulders_text}
        ${roboto}
        ${caveat}
        ${noto_sans_tc}
      `}>
        {/* <BrowserRouter> */}
          <AppRouterCacheProvider>
            <ThemeContextProvider>
              {/* <Navbar/> */}
              {children}
              {/* <Footer/> */}
            </ThemeContextProvider>
          </AppRouterCacheProvider>
        {/* </BrowserRouter> */}
      </body>
    </html>
  );
}

// Report web vitals
// reportWebVitals();