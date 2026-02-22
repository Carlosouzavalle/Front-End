import Image from "next/image";


// components
import Header from "./components/header.components";
import Banners from "./components/banners.component";
import RandomText from "./components/random_text.component";
import AnotherButtons from "./components/another_buttons.component";
import CarrouselItems from "./components/carrousel_items.component";
import FixedInstrumentsText from "./components/fixed_instruments_text.component";



export default function Home() {
  return (
    <main>
      <Header />
      <RandomText />
      <Banners />
      <AnotherButtons />
      <FixedInstrumentsText />
      <CarrouselItems />
    </main>
  );
}
