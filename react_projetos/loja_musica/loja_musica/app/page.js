import Image from "next/image";


// components
import Header from "./components/header.components";
import Banners from "./components/banners.component";
import RandomText from "./components/random_text.component";
import AnotherButtons from "./components/another_buttons.component";
import CarrouselItems from "./components/carrousel_items.component";
import FixedInstrumentsText from "./components/fixed_instruments_text.component";
import CategoryInstruments from "./components/category_instruments.component";
import Category_text from "./components/category_text.component";
import Courses from "./components/courses.component";
import Courses_text from "./components/courses_text.component";
import Sponrs from "./components/sponrs.component";
import Footer from "./components/footer.component";


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
