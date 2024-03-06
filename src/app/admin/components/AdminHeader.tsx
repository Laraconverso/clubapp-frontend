import Image from "next/image"
import logo from "@public/LogoBlanco.png"
import Link from "next/link"
import AdminOptions from "./AdminOptions"
import { cookies } from "next/headers"

const AdminHeader = () => {
  const adminAuth = cookies().has("adminAuth")
  return (
    <header className="min-w-screen sticky top-0 z-40">
      <div className={`flex flex-row justify-between items-center bg-baltic-sea-950/70`}>
        <figure className="text-white p-3 cursor-pointer">
          <Link href={'/'}>
            <Image src={logo} alt="Club App logo" height={60} />
          </Link>
        </figure>
        {
          adminAuth && <AdminOptions />
        }
      </div>
    </header>
  )
}

export default AdminHeader