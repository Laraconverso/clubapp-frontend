import { logoutAdmin } from "@/lib/admin.actions"
import { usePathname, useRouter } from "next/navigation"
import { GiReceiveMoney } from "react-icons/gi";

const linkClasses = (path: string) => {

}
const Admin = () => {

  let isAdminAuth = sessionStorage.getItem('adminAuth')

  const router = useRouter()
  const pathname = usePathname()

  const logout = async () => {
    sessionStorage.removeItem('adminAuth')
    await logoutAdmin()
    router.replace("/")
  }

  return (
    <>
      {
        !isAdminAuth ? <></> :

          <div className="flex flex-row">
            <section>
              <ul>
                <li className={pathname === "/admin" ? "bg-red-500": ""}>Partidos</li>
                <li>Equipos</li>
                <li>Jugadores</li>
              </ul>
            </section>
            <section className="flex gap-8">
              <button>Perfil</button>
              <button><GiReceiveMoney /></button>
              <button className="group bg-primary-500 font-squada rounded-3xl p-1 px-2  text-baltic-sea-900" onClick={logout}>
                <p className="group-active:scale-95">Cerrar Sesión</p>
              </button>
            </section>

          </div>

      }
    </>
  )
}

export default Admin