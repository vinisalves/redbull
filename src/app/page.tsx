import { CarouselBackground } from "@/components/CarouselBackground";
import { PromoForm } from "@/components/PromoForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh w-full flex justify-center items-center   ">
      <div className="absolute w-full h-full bg-black/40 z-10"></div>
      {/* <div className="absolute hidden sm:block  z-10 top-0 left-0 m-5 ">
        <Image
          src="/imgs/redbullcom-logo_double-with-text.svg"
          width={300}
          height={300}
          alt="Redbull Logo"
        />
      </div> */}
      <div className="absolute w-full h-dvh ">
        <CarouselBackground />
      </div>
      <div className="z-10 ">
        <PromoForm />
      </div>
    </div>
  );
}
