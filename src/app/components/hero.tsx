"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

var images = [
    'https://lh3.googleusercontent.com/p/AF1QipOArBwHW_pCziFrJpz1Qr5rtjQTJdVHThRFBBX9=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipMyln7CUxalLrc93kvfxc69TwGI4DuYxXrKWTAj=s680-w680-h510'
];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="bg-cover bg-center bg-no-repeat relative lg:h-[800px] sm:h-86"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                transition: 'background-image 1s ease-in-out'
            }}
        >
        <div className="absolute inset-0 bg-[#FAFAFA] opacity-70 z-10" />
          <div className="flex flex-row items-center relative z-20"> 
            <Image
              src="/svg/froska.svg"
              alt="froska-logo"
              width={196}
              height={75}
              className="xl:w-52 xl:h-20 w-24 h-10"

            />
            <Link href="/game/choosegame" className="ml-auto">
            
            </Link>
          </div>

            <div className="flex flex-row max-sm:flex-col max-lg:flex-col sm:items-center max-md:items-center items-center max-lg:items-start mt-10">
              <div className=" relative z-20 ">
                <h1 className="xl:text-7xl lg:text-5xl sm:text-xl md:text-4xl text-[#003867] font-orbitron mb-3 font-normal flex lg:justify-start justify-center">
                Paws and Spin 
                </h1>
                <h1 className="xl:text-7xl lg:text-5xl sm:text-xl md:text-4xl text-[#003867] font-orbitron font-normal flex lg:justify-start justify-center whitespace-nowrap">
                Where Degens Win
                </h1>
                <p className="text-[#003867] mt-3 max-sm:mt-5 font-normal font-aeonik flex lg:justify-start justify-center">
                The memblefi revolution on Metis
                </p>
                <div className="flex flex-row items-center justify-center gap-4 mt-6 max-sm:text-xs max-sm:flex-col max-sm:items-center">
                <Link href="/game/choosegame" className="lg:mr-auto">
                  
                </Link>
                </div>
              </div>
                <img
                  src="/svg/player.svg"
                  alt="player simulation"
                  className="relative scale-75 xl:scale-90 transition-transform lg:block hidden xl:ml-16 lg:ml-10 ml-0"
                />
          </div>
        </section>
      );
};