import FixtureContainer from "@/components/fixture/FixtureContainer";
import TeamContainer from "@/components/teams/TeamContainer";
import Image from "next/image";
import footballBanner from "@public/bannerFootball.png"
import bgImage from '@public/bgHomeImage.png'
export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <figure className="w-full">
          <Image src={footballBanner} className="object-cover" alt={"Football banner"}/>
        </figure>
      </div>
      <div>
        <Image src={bgImage} alt="login Team Image" fill={true} className="object-cover object-center w-full -z-10" />
        <div className={`mt-14`}>
          <h1 className="text-center text-5xl font-bauhs drop-shadow-md text-baltic-sea-900"> Bienvenido a ClubAPP</h1>
        </div>
        <div className={`flex flex-col lg:flex-row justify-evenly my-6 px-2 gap-5`}>
          <FixtureContainer />
          <TeamContainer />
        </div>
      </div>
    </main>
  );
}
