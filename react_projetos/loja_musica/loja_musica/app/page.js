
import Image from "next/image";
import React from "react";

// components
import Header from "@/app/components/header.components";
import RandomText from "@/app/components/Random_text.component";
import Banners from "@/app/components/Banners.component";
import AnotherButtons from "@/app/components/Another_buttons.component";
import FixedInstrumentsText from "@/app/components/Fixed_instruments_text.component";
import CarrouselItems from "@/app/components/Carrousel_items.component";
import Category_text from "@/app/components/Category_text.component";
import CategoryInstruments from "@/app/components/Category_instruments.component";
import Courses_text from "@/app/components/Courses_text.component";
import Courses from "@/app/components/Courses.component";
import Sponrs from "@/app/components/Sponrs.component";
import Footer from "@/app/components/Footer.component";


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
      <Category_text />
      <CategoryInstruments />
      <Courses_text />
      <Courses />
      <Sponrs />
      <Footer />
    </main>
  );
}
