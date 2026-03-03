
import Image from "next/image";
import React from "react";

// components
import Header from "@/app/components/Header";
import RandomText from "@/app/components/RandomText";
import Banners from "@/app/components/Banners";
import AnotherButtons from "@/app/components/AnotherButtons";
import FixedInstrumentsText from "@/app/components/FixedInstrumentsText";
import CarrouselItems from "@/app/components/CarrouselItems";
import CategoryText from "@/app/components/CategoryText";
import CategoryInstruments from "@/app/components/CategoryInstruments";
import CoursesText from "@/app/components/CoursesText";
import Courses from "@/app/components/Courses";
import Sponsors from "@/app/components/Sponsors";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <RandomText />
      <Banners />
      <AnotherButtons />
      <FixedInstrumentsText />
      <CarrouselItems />
      <CarrouselItems />
      <CarrouselItems />
      <CategoryText />
      <CategoryInstruments />
      <CoursesText />
      <Courses />
      <Sponsors />
      <Footer />
    </main>
  );
}
