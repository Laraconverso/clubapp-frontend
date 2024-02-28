import FixtureContainer from "@/components/fixture/FixtureContainer";
import TeamContainer from "@/components/teams/TeamContainer";
import Image from "next/image";
import footballBanner from "@public/bannerFootball.png"

export default function Home() {
  
  return (
    <main className="flex flex-col bg-gradient-to-b from-primary-600 to-primary-400 min-h-screen">
      <figure className="w-full">
          <Image src={footballBanner} className="object-cover" alt={"Football banner"}/>
        </figure>
      <div className={`mt-14`}>
        <h1 className="text-center text-5xl font-bauhs drop-shadow-md"> Bienvenido a ClubAPP</h1>
      </div>
      <div className={`flex flex-col lg:flex-row justify-evenly my-6 px-2 gap-5`}>
        <FixtureContainer />
        <TeamContainer />
      </div>
    </main>
  );
}
