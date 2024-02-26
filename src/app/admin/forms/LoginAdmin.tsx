'use client'
import { adminAuth } from "@/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginAdmin = () => {
    const [formState, setFormState] = useState<"incorrect" | "none">("none")
    const router = useRouter()

    const authorizeAdmin =async (formData: FormData) =>{
      const password = formData.get('password')?.toString()
        const validAuth = await adminAuth(password)

        if(!validAuth) {setFormState("incorrect") ; return};
        sessionStorage.setItem("adminAuth", "true")
        router.refresh()
    }

  return (
    <div className="grid h-screen place-items-center text-center">
      <form action={authorizeAdmin} >
        <h2 className="text-2xl font-squada">Ingresa la contraseña de administrador</h2>
        <hr />
      <input
      className="text-primary-950 outline-none block mx-auto my-5 text-center"
      type="text" id="password" name="password"/>
      {formState === "incorrect" && <span>contraseña incorrecta</span>}
      </  form>
    </div>
  )
}

export default LoginAdmin