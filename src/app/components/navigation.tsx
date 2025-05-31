import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
    return (
        <nav className="bg-froska-black pt-4 flex justify-between">
        <Link href="/">
          <Image
            src="/ntbcLogo.svg"
            alt="ntbc-logo"
            width={196}
            height={75}
            className="xl:max-w-24 xl:h-auto w-20 h-10 lg:-mt-5 sm:-mt-0"
          />
        </Link>
        <div id="myNavMenu" 
            className="nav-menu max-[900px]:left-0 max-[900px]:fixed max-[900px]:top-20 max-[900px]:-left-full max-[900px]:flex-col max-[900px]:justify-center max-[900px]:align-center max-[900px]:bg-[rgba(255, 255, 255, 0.7)] max-[900px]:backdrop-blur-[20px] max-[900px]:w-full max-[900px]:min-h-[450px] max-[900px]:h-[90vh] max-[900px]:duration-300 flex w-[20vw] list-none relative">
                <ul 
                    className="max-[900px]:flex-col flex text-center">
                    <li className="flex-auto relative w-3/12 list">
                        <Link href="#home" 
                            className="no-underline text-feat-text-col font-semibold ps-[15px] pe-[15px] ms-5 me-5 relative text-[#003867] duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-[15px] after:-translate-y-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:bg-[#6e57e0] after:rounded-5xl">
                            Home
                        </Link>
                        <div className = "circle"></div>
                    </li>
                    <li className="flex-auto relative w-3/12 list">
                        <Link href="#about" 
                            className="no-underline text-feat-text-col font-semibold ps-[15px] pe-[15px] ms-5 me-5 text-[#003867]">
                            About
                        </Link>
                    <div className="circle"></div>
                    </li>
                    <li className="flex-auto relative w-3/12 list">
                        <Link href="#projects" 
                            className="no-underline text-feat-text-col font-semibold ps-[15px] pe-[15px] ms-5 me-5 text-[#003867]">
                            Projects
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="flex-auto relative w-3/12 list">
                        <Link href="#contact" 
                            className="no-underline text-feat-text-col font-semibold ps-[15px] pe-[15px] ms-5 me-5 text-[#003867]">
                            Contact
                        </Link>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>

            <div className="max-[900px]:hidden flex-initial w-44 p-0 box-border">
                <button className = "font-normal py-4 px-5 bg-[#003867] rounded-xl leading-none hover:bg-[#6e57e0] hover:text-white">Download CV <i className="ml-2.5 fa-solid fa-download"></i></button>
            </div>
            <div className="max-[900px]:flex max-[900px]:items-center max-[900px]:justify-center hidden">
                <i className="fa-solid fa-bars" /*onclick="myMenuFunction()"*/></i>
            </div>
      </nav>
    )
};