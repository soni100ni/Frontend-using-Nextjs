"use client";
import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestmonials from "@/components/MusicSchoolTestmonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] ">
  <HeroSection/>
  <FeaturedCources/>
  <WhyChooseUs/>
  <MusicSchoolTestmonials/>
  <UpcomingWebinars/>
  <Instructors/>
  <Footer/>
  </main>
    </>
);
}
