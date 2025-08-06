import Image from "next/image";

export default function Contact() {
    return(
        <section className="pt-[16vh]">
            <div className="bg-cover bg-center bg-no-repeat relative opacity-80 lg:h-30vh sm:h-86"
            style={{
                backgroundImage: `url('/images/DSCN4759.JPG')`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
            >
            <div className="absolute inset-0 bg-[#003867] opacity-90 z-10"></div>
            
            <div className="max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-[50px] ps-[12vw] pe-[12vw] flex justify-between w-full gap-[50px] relative z-20">
                <div className="max-[900px]:flex max-[900px]:justify-center max-[900px]:w-full flex w-[30%] -mt-12">
                    <div className="max-[900px]:w-full relative flex flex-col justify-center items-center py-5 px-7 w-full h-[40vh] bg-[#ff0912] rounded-md box-shadow-[1px 8px 10px 2px rgba(0, 0, 0, 0.1)] overflow-hidden group after:content-[''] after:absolute hover:bottom-0 after:bottom-0 after:-bottom-full hover:bg-[#6e57e0] after:w-full after:h-full after:duration-400 after:z-[1] hover:bg-white hover:text-[#777] z-[2] transform transition duration-500 hover:[transform:rotateX(10deg)]">
                        <Image
                            src="/svg/contact-headset-communication.svg"
                            className="flex-shrink-0 lg:w-[220px] lg:h-[80px] w-[250px] h-[80px] pb-4"
                            alt="Contact"
                            width={250}
                            height={25}
                            />
                        <h2 className="text-white text-2xl font-bold mb-5 group-hover:text-[#003867] group-hover:z-[2]">Contact Us</h2>
                        <a href="tel:+233244279458" className="flex items-center text-white font-semibold my-[5px] group-hover:text-[#003867] group-hover:z-[2]">+233 244 279 458</a>
                        <a href="mailto:worldwidentbc@gmail.com" className="flex items-center text-white font-semibold my-[5px] group-hover:text-[#003867] group-hover:z-[2]">worldwidentbc@gmail.com</a>
                    </div>
                </div>

                <div className="max-[900px]:flex max-[900px]:justify-center max-[900px]:w-full flex flex-col w-[60%] py-12 gap-6">
                    <h2 className="text-4xl capitalize font-black text-[#ff0912]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Get In Touch</h2>
                    <p className="text-xl/8 text-[#FAFAFA]">
                        We would love to hear from you! 
                        Whether you have questions, need prayer, or want to learn more about New Testament Baptist Church, please don't hesitate to reach out.
                    </p>
                    <div className="flex flex-row gap-4 mt-6 max-sm:text-xs max-sm:flex-col max-sm:items-center">
                        <button className = "font-normal py-4 px-5 bg-[#ff0912] rounded-sm leading-none text-[#FAFAFA] hover:bg-[#03068a] hover:text-white">Contact Us</button>
                    </div>
                </div>
            </div>

            </div>
        </section>
        
    )
}