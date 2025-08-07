import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleLinkClick = () => setMenuOpen(false);
    return (
        <nav className="bg-froska-black pt-2 pb-2 px-2 sm:px-4 flex items-center justify-between relative z-50 w-full">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
                <Link href="/">
                    <Image
                        src="./ntbcLogo.svg"
                        alt="ntbc-logo"
                        width={120}
                        height={45}
                        className="w-12 h-auto sm:w-16 md:w-20 lg:w-24 xl:w-32"
                        priority
                    />
                </Link>
            </div>
            {/* Right: Hamburger (mobile/tablet) */}
            <div className="flex lg:hidden items-center ml-auto">
                <button
                    aria-label="Open navigation menu"
                    onClick={handleMenuToggle}
                    className="focus:outline-none p-2 rounded z-50 bg-white/80 hover:bg-white"
                >
                    <i className="fa-solid fa-bars text-2xl text-[#003867]"></i>
                </button>
            </div>
            {/* Center: Nav Menu (desktop) */}
            <div
                id="myNavMenu"
                className={`nav-menu transition-all duration-300
                    hidden lg:flex flex-row items-center w-auto relative
                    lg:static lg:bg-transparent lg:backdrop-blur-none lg:min-h-0 lg:top-auto lg:left-auto
                    `}
            >
                <ul className="flex flex-row text-center w-auto">
                    <li className="relative list">
                        <Link href="#home" onClick={handleLinkClick}
                            className="block no-underline text-feat-text-col font-semibold px-4 py-2 duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-[10px] after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:bg-[#6e57e0] after:rounded-5xl">
                            Home
                        </Link>
                        <div className = "circle"></div>
                    </li>
                    <li className="relative list">
                        <Link href="about" onClick={handleLinkClick}
                            className="block no-underline text-feat-text-col font-semibold px-4 py-2">
                            About
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="relative list">
                        <Link href="#services" onClick={handleLinkClick}
                            className="block no-underline text-feat-text-col font-semibold px-4 py-2">
                            Services
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="relative list">
                        <Link href="contact" onClick={handleLinkClick}
                            className="block no-underline text-feat-text-col font-semibold px-4 py-2">
                            Contact
                        </Link>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>
            {/* Desktop Contact Button */}
            <div className="hidden lg:flex flex-initial w-44 p-0 box-border ml-4">
                <button className = "font-normal py-4 px-5 bg-[#dc1a24] rounded-xl leading-none text-[#FAFAFA] hover:bg-[#03068a] hover:text-white">Contact Us <i className="ml-2.5 fa-solid fa-download"></i></button>
            </div>
            {/* Mobile/Tablet Slide-out Nav Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden`}
                onClick={handleMenuToggle}
            >
                <div
                    className={`absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-lg flex flex-col pt-8 px-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <ul className="flex flex-col gap-4 mt-8">
                        <li>
                            <Link href="#home" onClick={handleLinkClick} className="block text-[#003867] font-semibold py-2">Home</Link>
                        </li>
                        <li>
                            <Link href="about" onClick={handleLinkClick} className="block text-[#003867] font-semibold py-2">About</Link>
                        </li>
                        <li>
                            <Link href="#services" onClick={handleLinkClick} className="block text-[#003867] font-semibold py-2">Services</Link>
                        </li>
                        <li>
                            <Link href="contact" onClick={handleLinkClick} className="block text-[#003867] font-semibold py-2">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};