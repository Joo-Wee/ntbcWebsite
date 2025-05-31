import Image from "next/image";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main className="ps-[6vw] pe-[6vw] bg-[#FAFAFA]">
      <Hero />
    </main>
  );
}
