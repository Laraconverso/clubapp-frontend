'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import addPlayer from '@public/addPlayer.svg'
import addDT from '@public/addDT.svg'
import addTeam from '@public/addTeam.svg'
import addMatch from '@public/addMatch.svg'
import { IoIosArrowDropleft } from "react-icons/io"
import Link from "next/link"
import saveMoney from '@public/saveMoney.svg'
import { logoutAdmin } from "@/lib/admin.actions"
import { useRouter } from "next/navigation"

const AdminOptions = () => {
  const router = useRouter()
  const logout = async () => {
    await logoutAdmin()
    router.replace("/")
  }

  return (
    <nav className="flex text-primary-50 items-center" >
      <div className="flex *:mx-4 font-squada">
        <button className="rounded-2xl bg-primary-500 h-fit self-center px-4 py-1 text-sm text-baltic-sea-900 font-thin"
        onClick={logout}>
          CERRAR SESIÓN
          </button>
        <button className="flex flex-col  items-center">
          <Image src={saveMoney} alt="save" width={30} />
          <span>COBROS</span>
        </button>
      </div>
      <div className="hidden relative group h-fit text-center font-squada sm:block" >
        <div className="flex flex-col items-center mx-4 cursor-pointer">
          <input type="checkbox" className="absolute w-full h-full z-10 opacity-0"/>
          <IoIosArrowDropleft className="text-4xl text-primary-500 group-has-[:checked]:-rotate-180 transition" />
          <span>GESTIÓN</span>
        </div>
        <nav className="flex-col w-24 fixed -right-24 transition-[right] justify-around  mt-10 bg-baltic-sea-950/70 group-has-[:checked]:right-0 z-40">
          <AdminOption img={addPlayer} title={"Jugadores"} url="/admin/players" />
          <AdminOption img={addDT} title={"DTs"} url="/admin/coaches" />
          <AdminOption img={addTeam} title={"Equipos"} url="/admin/teams" />
          <AdminOption img={addMatch} title={"Partidos"} url="/admin/matches" />
        </nav>
      </div>

    </nav>
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