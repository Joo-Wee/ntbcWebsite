import Image from "next/image";
import Leadership from "./leadership";

export default function About() {
    return (
      <section className="bg-[#FAFAFA] px-4 sm:px-[6vw] pt-[6vh] flex flex-col" id="games">
        <div className="text-[32px] w-full py-[1vw] font-bold text-[#003867]">
          <h1 className="max-[900px]:text-3xl text-center">About Us</h1>
        </div> 
        <div className="flex flex-col lg:flex-row gap-6 max-w-[90rem] pb-8 w-full mx-auto items-start z-[5]">
          {/* Hide image section on mobile */}
          <div className="hidden lg:flex relative w-full lg:w-1/2 max-h-[60vh] h-[55vh] items-center justify-center px-2">
            <div className="z-[6] h-full mx-auto"
              style={{
                backgroundImage: `url('images/about-1-bg.png')`,
                backgroundSize: 'cover'
            }}
            >
              <Image
                src="/images/DSCN4751.JPG"
                alt="Vector Image"
                width={320}
                height={200}
                className="w-[60%] h-84 rounded-md object-contain md:w-full"
              />                
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-[#f6f6f6] w-full shadow-lg/20 rounded-b-2xl py-6 px-4 sm:px-[2vw]">
                <h2 className="text-[25px] font-bold text-[#ff0912]">Who We Are</h2>
                <p className="text-base/8 text-[#003867] capitalize">
                  New Testament Baptist Church is a Bible-believing church dedicated to spreading the teachings of Christ and making a positive impact on the world around us. 
                  Our motto, 'The Church That Jesus Built,' reflects our commitment to foundational Christian principles and a genuine desire to serve our community.
                  We believe in the transformative power of faith and strive to create a welcoming environment where individuals can grow spiritually, connect with others, 
                  and find purpose. Our aim is to empower believers to live out their faith in practical ways, contributing to a better world for all.
                </p>
            </div> 
          </div>
          <Leadership/>
    </section>
    )
  }