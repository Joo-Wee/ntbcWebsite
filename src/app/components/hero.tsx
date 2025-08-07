"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";

var images = [
    'https://lh3.googleusercontent.com/p/AF1QipOArBwHW_pCziFrJpz1Qr5rtjQTJdVHThRFBBX9=s680-w680-h510',
    './images/DSCN4649.JPG',
    './images/DSCN4650.JPG'
];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => 
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ), 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home"
            className="w-full bg-cover bg-center bg-no-repeat relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[800px]"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
        >
        <div className="absolute inset-0 bg-[#003867] opacity-70 z-10 mix-blend-hard-light"></div>
        <div
        id="header"
        className={`max-w-full px-2 sm:px-5 md:px-12 xl:px-20 2xl:px-40 w-full mx-auto py-4 bg-transparent sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md h-[5rem] leading-[35px] text-[#003867]' : 'shadow-none h-[90px] leading-[40px] text-[#FAFAFA]'
        }`}>
          <Navigation />
        </div>
        <div className="flex flex-col sm:flex-row w-full items-center justify-center mt-[18vh] sm:mt-[30vh] text-[#FAFAFA] gap-8">
          <div className="relative w-full sm:w-3/5 z-20 flex flex-col items-center text-center gap-y-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl text-[#ff0912] font-orbitron mb-3 font-bold uppercase">Welcome to</h1>
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-orbitron mb-3 font-bold uppercase">New Testament Baptist Church</h1>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-orbitron font-normal text-center whitespace-nowrap text-[#FAFAFA]">The Church that Jesus Built</h2>
            <p className="mt-3 sm:mt-5 font-normal font-aeonik text-center text-[#FAFAFA]">A Bible-believing community committed to transforming lives through the Gospel</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-xs sm:text-base">
                <button className = "font-normal py-3 px-5 bg-[#dc1a24] rounded-xl leading-none text-[#FAFAFA] hover:bg-[#03068a] hover:text-white">Join Us <i className="ml-2.5 fa-solid fa-download"></i></button>
            </div>
          </div>
        </div>
        </section>
      );
}