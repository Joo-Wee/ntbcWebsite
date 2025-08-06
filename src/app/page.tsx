import Image from "next/image";
import { Hero } from "./components/hero";
import About from "./about/page";
import Services from "./components/services";
import Ministries from "./components/ministries";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <Hero />
      <About/>
      <Services/>
      <Ministries/>
      <Contact/>
    </main>
  );
}
