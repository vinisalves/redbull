"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselBackground() {
  const images = [
    {
      url: "imgs/background1.jpeg",
    },
    {
      url: "imgs/background2.jpg",
    },
    {
      url: "imgs/background3.jpg",
    },
    {
      url: "imgs/background4.jpeg",
    },
    {
      url: "imgs/background5.jpg",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative w-full h-dvh">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
