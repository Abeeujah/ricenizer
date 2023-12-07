import Link from "next/link";
import { Button, Typography } from "./components/WithMt.exports";
import Carousel from "./components/Carousel";
import HeroText from "./components/HeroText";

export default function Home() {
  return (
    <div className="container">
      <div className="grid h-screen col-span-1 sm:grid-cols-2 place-items-center">
        <div>
          <HeroText />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}
