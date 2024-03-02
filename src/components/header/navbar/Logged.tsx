import { logoutUser } from "@/lib/user.actions"
import { cookies } from "next/headers"
import { useRouter } from "next/navigation"

const Logged = async () => {
const router = useRouter()
  const closeUserSession = async() => {
     await logoutUser()
      router.replace("/")
  }

  return (
        <button className="group bg-primary-500 font-squada rounded-3xl p-1 px-2 text-baltic-sea-900" onClick={closeUserSession}>
          <p className=" group-active:scale-95">Cerrar Sesión</p>
        </button>
  )
}

export default Logged