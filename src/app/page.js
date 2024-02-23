import Image from "next/image";
import { NavBar } from "@/components/NavBar/NavBar";
import Hero from "@/components/HeroSection/Hero";

export default function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
    <NavBar/>
    <Hero/>
    </>
  );
}
