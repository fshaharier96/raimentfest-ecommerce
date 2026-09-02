import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
     <div>
      <Header/>
      <div className="h-[60vh] w-full">
          <video
            src="/videos/hero_4.mp4"
            controls
            loop
            playsInline
            autoPlay
             className="w-full h-full object-cover"
          />
      </div>
    </div>
  );
}
