import { CarouselBackground } from "@/components/CarouselBackground";
import { PromoForm } from "@/components/PromoForm";
export default function Home() {
  return (
    <div className="h-dvh w-full flex justify-center items-center   ">
      <div className="absolute w-full h-full bg-black/40 z-10"></div>
      <div className="absolute w-full h-dvh ">
        <CarouselBackground />
      </div>
      <div className="z-10 ">
        <PromoForm />
      </div>
    </div>
  );
}
