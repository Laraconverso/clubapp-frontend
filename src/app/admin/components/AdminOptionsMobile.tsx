import { StaticImport } from "next/dist/shared/lib/get-img-props"
import addPlayer from '@public/addPlayer.svg'
import addDT from '@public/addDT.svg'
import addTeam from '@public/addTeam.svg'
import addMatch from '@public/addMatch.svg'
import Link from "next/link"
import Image from "next/image"
import { cookies } from "next/headers"

const AdminOptionsMobile = () => {
    const adminAuth = cookies().has("adminAuth")

    return (
        <>
            {
                adminAuth &&
                <div className="sm:hidden w-full max-h-16 flex sticky bottom-0 justify-around px-4 bg-baltic-sea-950/70 z-40">
                    <Option img={addPlayer} title={"Jugadores"} url="/admin/players" />
                    <Option img={addDT} title={"DTs"} url="/admin/coaches" />
                    <Option img={addTeam} title={"Equipos"} url="/admin/teams" />
                    <Option img={addMatch} title={"Partidos"} url="/admin/matches" />
                </div>

            }
        </>
    )
}

const Option = ({ img, title, url }: { img: StaticImport, title: string, url: string }) => {
    return (
        <Link href={url} replace tabIndex={1} className='flex max-w-12 bg-baltic-sea-900 p-2 rounded-md m-2 
    border-primary-500  focus:bg-baltic-sea-950 focus:border-2 box-border transition b outline-none'>

            <figure className='w-full overflow-hidden flex items-center justify-center rounded-md max-w-16'>
                <Image src={img} className='object-cover object-center' alt={title} />
            </figure>


        </Link>
    )
}
export default AdminOptionsMobile