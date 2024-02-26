'use client'

import { usePathname  } from "next/navigation"
import Unlogged from "./Unlogged"
import Logged from "./Logged"
import dynamic from "next/dynamic"

const Admin = dynamic(()=>import("./Admin"),{ssr: false})
const Navbar = () => {
const path = usePathname()

  return (
    <nav className="my-auto p-3">
      {
        (()=>{
          switch (path) {
            case "/":
              return <Unlogged/>
            case "/login":
              return <></>
            case "/user":
              return <Logged/>
            case "/admin":
              return <Admin/>
            default:
              break;
          }
        })()
      }
    </nav>
  )
}

export default Navbar