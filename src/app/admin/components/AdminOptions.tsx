'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import addPlayer from '@public/addPlayer.svg'
import addDT from '@public/addDT.svg'
import addTeam from '@public/addTeam.svg'
import addMatch from '@public/addMatch.svg'
import { IoIosArrowDropleft } from "react-icons/io"
import Link from "next/link"

const AdminOptions = () => {

  return (
    <div className="hidden relative group h-fit text-center font-squada sm:block" tabIndex={0}>
      <div className="flex flex-col items-center mx-4 text-primary-50 cursor-pointer">
        <IoIosArrowDropleft className="text-4xl text-primary-500 group-focus-within:-rotate-180 transition" />
        <span>GESTIÓN</span>
      </div>
      <nav className="translate-x-full -right-0 w-24 mt-10 absolute invisible bg-baltic-sea-950/70  flex-col justify-around group-focus-within:translate-x-0 group-focus-within:visible transition-all ">
        <AdminOption img={addPlayer} title={"Jugadores"} url="/admin/players" />
        <AdminOption img={addDT} title={"DTs"} url="/admin/coaches" />
        <AdminOption img={addTeam} title={"Equipos"} url="/admin/teams" />
        <AdminOption img={addMatch} title={"Partidos"} url="/admin/matches" />
      </nav>
    </div>
  )
}


const AdminOption = ({ img, title, url }: { img: StaticImport, title: string, url: string }) => {

  return (
    <Link href={url} replace tabIndex={1} className="group/links">
      <section className='flex flex-col gap-1 justify-around bg-baltic-sea-900 p-2 rounded-md m-2 group-focus-within/links:bg-baltic-sea-950
      group-focus-within/links:border-2
       border-primary-500 text-primary-50 transition box-border outline-none' >

        <figure className='w-full overflow-hidden flex items-center justify-center rounded-md max-w-16'>
          <Image src={img} className='object-cover object-center' alt={title} />
        </figure>

        <p className="text-xs hidden md:block">{title}</p>

      </section>
    </Link>
  )
}

export default AdminOptions