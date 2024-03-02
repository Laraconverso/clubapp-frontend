import footballUserBanner from "@public/footballUserBanner.png"
import bgImage from '@public/primaryBG.png'
import altaEquipo from '@public/altaEquipo.png'
import altaPartido from '@public/altaPartido.png'
import altaJugador from '@public/altaJugador.jpeg'
import Image from "next/image"

const page = () => {

  return (
    <main className="min-h-screen w-screen flex flex-col gap-5 items-center relative">
      <Image src={bgImage} alt="login Team Image" className="absolute object-cover w-full h-full -z-10" />
        <figure className="w-full">
          <Image src={footballUserBanner} className="object-cover" alt={"Football banner"}/>
        </figure>
        <div className={`mt-14`}>
          <h1 className="text-center text-5xl font-bauhs text-baltic-sea-900"> Bienvenido JUGADOR</h1>
        </div>
        <div className='grid grid-cols-1 gap-3 mb-6 md:grid-cols-3 md:gap-6 lg:mb-0  items-center justify-center'>
        <section className='flex flex-col bg-silver-950 px-4 py-5 rounded-3xl cursor-pointer'>
          <p className='text-center text-xl font-bauhs text-primary-500'>MI EQUIPO</p>
          <figure className='w-full max-h-40 overflow-hidden flex items-center justify-center'>
            <Image src={altaEquipo} className='object-cover object-bottom' alt="alta equipo" />
          </figure>
        </section>

        <section className='flex flex-col justify-around bg-silver-950 px-4 py-5 rounded-3xl cursor-pointer'>
          <p className='text-center text-xl font-bauhs text-primary-500'>PERFIL</p>
          <figure className='w-full max-h-40 overflow-hidden flex items-center justify-center'>
            <Image src={altaJugador} className='object-cover object-center' alt="alta equipo" />
          </figure>
        </section>

        <section className='flex flex-col justify-around bg-silver-950 px-4 py-5 rounded-3xl cursor-pointer'>
          <p className='text-center text-xl font-bauhs text-primary-500'>MIS PARTIDOS</p>
          <figure className='w-full max-h-40 overflow-hidden flex items-center justify-center'>
            <Image src={altaPartido} className='object-cover object-center' alt="alta equipo" />
          </figure>
        </section>

      </div>
      </main>
  );
}


export default page