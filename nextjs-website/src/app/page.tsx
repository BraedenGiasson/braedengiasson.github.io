import React from 'react'
import Head from 'next/head'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement, BackToTop, MyTrips } from '@/components'
import { headerData } from '@/data/headerData';

import ScrollToTop from '@/utils/ScrollToTop';
// import { BackToTop } from '@/components/'

import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/Contacts/Contacts"), { ssr: false })

export default function Home() {
  
  return (
    <div>
        {/* <ScrollToTop /> */}
        <Navbar />        
        <Landing />
        <About />
        <MyTrips />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievement />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
        {/* <Contacts /> */}
        <Footer />
        <BackToTop />
    </div>
)
}
