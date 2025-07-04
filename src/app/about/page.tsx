import Image from "next/image";
import Leadership from "./leadership";

export default function About() {
    return (
      <section className="ps-[6vw] pe-[6vw] pt-[6vh] flex flex-col" id="games">
        <div className="text-[32px] w-full py-[1vw] font-bold text-[#003867]">
          <h1 className="max-[900px]:text-3xl text-center max-[900px]:ml-[2rem]">About Us</h1>
        </div> 
          
        <div className="ms-[4rem] max-w-[90rem] pb-[4rem] gap-1 me-[4vw] flex flex-row items-start z-[5]">
          <div className="relative w-1/2 max-h-[60vh] h-[55vh] flex items-right flex ps-2 pe-2 w-full">
            <div className="max-[900px]:hidden z-[6] relative h-full mx-auto md:relative md:flex-col"
              style={{
                backgroundImage: `url("images/about-1-bg.png")`,
                backgroundSize: 'cover'
            }}
            >
              <Image
                src="/images/DSCN4751.JPG"
                alt="Vector Image"
                width={320}
                height={200}
                className="w-[20%] h-84 rounded-md relative right-16 object-contain md:w-full"
              />                
            </div>
          </div>
  
          <div className="comeRight flex flex-col gap-5 bg-[#f6f6f6] md:w-full shadow-lg/20 rounded-b-2xl py-6 ps-[2vw] pe-[2vw]">
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