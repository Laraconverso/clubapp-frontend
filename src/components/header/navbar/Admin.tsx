import { logoutAdmin } from "@/lib/admin.actions"
import { useRouter, useSearchParams } from "next/navigation"

const Admin = () => {

  let isAdminAuth = sessionStorage.getItem('adminAuth')

  const router = useRouter()

  const logout = async () => {
    sessionStorage.removeItem('adminAuth')
    await logoutAdmin()
    router.replace("/")
  }

  return (
    <>
      {
        !isAdminAuth ? <></> :

          <div>
            <section className="flex gap-8">
              <button>Perfil</button>
              <button>Cobros</button>
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