import Image from "next/image"
import logo from "@public/LogoBlanco.png"
import Navbar from "./navbar/Navbar"
import Link from "next/link"

const Header = () => {

  return (
    <header className="w-screen top-0 z-10 fixed">
      <div className={`flex flex-row justify-between cursor-pointer bg-baltic-sea-950/70`}>
        <figure className="text-white p-3 cursor-pointer">
          <Link href={'/'}>
            <Image src={logo} alt="Club App logo" height={60} />
          </Link>
        </figure>

        <Navbar />
      </div>
    </header>
  )
}

export default Header