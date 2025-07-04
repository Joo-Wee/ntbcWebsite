"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";

var images = [
    'https://lh3.googleusercontent.com/p/AF1QipOArBwHW_pCziFrJpz1Qr5rtjQTJdVHThRFBBX9=s680-w680-h510',
    '/images/DSCN4649.JPG',
    '/images/DSCN4650.JPG'
];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000); // Change image every 10 seconds

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
        <section
            className="w-full bg-cover bg-center bg-no-repeat relative lg:h-[800px] sm:h-86"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
        >
        <div className="absolute inset-0 bg-[#003867] opacity-70 z-10 mix-blend-hard-light"></div>
        <div
        id="header"
        className={`lg:max-w-screen-378 max-w-full max-sm:px-5 max-sm:py-7 px-20 w-full mx-auto py-4 max-lg:px-12 xl:px-20 2xl:px-40 min-[1700px]:px-[20rem] bg-transparent sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md h-[6rem] leading-[35px] text-[#003867]' : 'shadow-none h-[90px] leading-[40px] text-[#FAFAFA]'
        }`}>
          <Navigation />
        </div>
        
        
            <div className="ps-[6vw] pe-[6vw] flex flex-row w-full max-sm:flex-col max-lg:flex-col sm:items-center max-md:items-center items-center max-lg:items-center mt-[30vh] text-[#FAFAFA]">
              <div className="relative w-full z-20 flex gap-y-4 flex-col items-center text-center">
                <h1 className="xl:text-3xl lg:text-xl sm:text-sm md:text-md text-[#ff0912] font-orbitron mb-3 font-bold uppercase text-center text-[#FAFAFA]">
                    Welcome to
                </h1>
                <h1 className="xl:text-5xl lg:text-3xl sm:text-lg md:text-xl font-orbitron mb-3 font-bold uppercase text-center">
                    New Testament Baptist Church 
                </h1>
                <h2 className="xl:text-4xl lg:text-2xl sm:text-md md:text-lg font-orbitron font-normal text-center whitespace-nowrap text-[#FAFAFA]">
                The Church that Jesus Built
                </h2>
                <p className="mt-3 max-sm:mt-5 font-normal font-aeonik text-center text-[#FAFAFA]">
                A Bible-believing community committed to transforming lives through the Gospel
                </p>
                <div className="flex flex-row items-center justify-center gap-4 mt-6 max-sm:text-xs max-sm:flex-col max-sm:items-center">
                    <button className = "font-normal py-4 px-5 bg-[#dc1a24] rounded-xl leading-none text-[#FAFAFA] hover:bg-[#03068a] hover:text-white">Join Us <i className="ml-2.5 fa-solid fa-download"></i></button>
                </div>
              </div>
          </div>
        </section>
      );
};