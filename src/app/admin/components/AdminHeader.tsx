import Image from "next/image"
import logo from "@public/LogoBlanco.png"
import Link from "next/link"
import AdminOptions from "./AdminOptions"

const AdminHeader = () => {

  return (
    <header className="w-screen fixed top-0 z-50">
      <div className={`flex flex-row justify-between items-center bg-baltic-sea-950/70`}>
        <figure className="text-white p-3 cursor-pointer">
          <Link href={'/'}>
            <Image src={logo} alt="Club App logo" height={60} />
          </Link>
        </figure>
        <AdminOptions/>
      </div>
    </header>
  )
}

export default AdminHeader