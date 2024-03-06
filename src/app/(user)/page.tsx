import FixtureContainer from "@/components/fixture/FixtureContainer";
import TeamContainer from "@/components/teams/TeamContainer";
import Image from "next/image";
import footballBanner from "@public/bannerFootball.png"
import Carousel from "@/components/Carousel";
import NextMatchContainer from "@/components/nextMatch/NextMatchContainer";
import PlayedMatchContainer from "@/components/playedMatch/PlayedMatchContainer";
export default function Home() {

  const cards = [
    <FixtureContainer key="1" />,
    <TeamContainer key="2" />,
    <NextMatchContainer key="3" />,
    <PlayedMatchContainer key="4" />,
  ];

  return (
    <main className="min-h-screen w-screen flex flex-col gap-5 items-center relative">
      
        <figure className="w-full object-cover">
          <Image src={footballBanner} className="object-cover w-full" alt={"Football banner"} />
        </figure>
        
      <div className="relative">
        
        <div className={`mt-14`}>
          <h1 className="text-center text-5xl font-bauhs drop-shadow-md text-baltic-sea-900"> Bienvenido a ClubAPP</h1>
          <Carousel cards={cards} />
        </div>
      </div>
    </main>
  );
}
