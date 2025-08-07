import Image from "next/image";

export default function Contact() {
    return(
        <section className="pt-[10vh]">
            <div className="bg-cover bg-center bg-no-repeat relative opacity-80 min-h-[30vh] w-full"
            style={{
                backgroundImage: `url('images/DSCN4759.JPG')`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
            >
            <div className="absolute inset-0 bg-[#003867] opacity-90 z-10"></div>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 relative z-20 py-8 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="flex justify-center w-full lg:w-1/3 -mt-12">
                    <div className="w-full relative flex flex-col justify-center items-center py-5 px-4 sm:px-7 h-[40vh] bg-[#ff0912] rounded-md shadow-lg overflow-hidden group after:content-[''] after:absolute hover:bottom-0 after:bottom-0 after:-bottom-full hover:bg-[#6e57e0] after:w-full after:h-full after:duration-400 after:z-[1] hover:bg-white hover:text-[#777] z-[2] transform transition duration-500 hover:[transform:rotateX(10deg)]">
                        <Image
                            src="./svg/contact-headset-communication.svg"
                            className="flex-shrink-0 w-[180px] h-[60px] sm:w-[220px] sm:h-[80px] pb-4"
                            alt="Contact"
                            width={220}
                            height={80}
                        />
                        <h2 className="text-white text-2xl font-bold mb-5 group-hover:text-[#003867] group-hover:z-[2]">Contact Us</h2>
                        <a href="tel:+233244279458" className="flex items-center text-white font-semibold my-[5px] group-hover:text-[#003867] group-hover:z-[2]">+233 244 279 458</a>
                        <a href="mailto:worldwidentbc@gmail.com" className="flex items-center text-white font-semibold my-[5px] group-hover:text-[#003867] group-hover:z-[2] break-all">worldwidentbc@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-2/3 py-4 gap-6">
                    <h2 className="text-3xl sm:text-4xl capitalize font-black text-[#ff0912] text-shadow">Get In Touch</h2>
                    <p className="text-lg sm:text-xl text-[#FAFAFA]">
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