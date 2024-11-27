"use client";


import Hero from "@/components/Hero";
import Image from "next/image";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration : 1200,
      delay: 100,
      mirror: true,
      anchorPlacement:"bottom-bottom",
      offset:160,

    });
    AOS.refresh()
  },[]);
  
  return (
   <main>
    <Hero/>
    <Project />
    <Skills />
    <Contacts />
    <About />
    <Footer />
    
   </main>
  );
}
