"use client";

import Coined from "@/public/brazil.jpg";
import One from "@/public/one.jpg";
import Served from "@/public/served.jpg";
import Image from "next/image";
import { Carousel, IconButton } from "./WithMt.exports";

const CarouselCustomArrows = () => {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative">
        <Image
          src={One}
          priority
          placeholder="blur"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative">
        <Image
          src={Coined}
          alt="image 2"
          placeholder="blur"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative">
        <Image
          src={Served}
          alt="image 3"
          placeholder="blur"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default CarouselCustomArrows;
