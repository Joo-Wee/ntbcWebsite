import Image from "next/image";
import { Hero } from "./components/hero";
import About from "./about/page";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <Hero />
      <About/>
    </main>
  );
}
