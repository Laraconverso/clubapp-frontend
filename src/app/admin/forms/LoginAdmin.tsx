'use client'
import { adminAuth } from "@/auth"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import footballBanner from "@public/bannerFootball.png"

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
    <div className=" absolute grid h-screen top-0  text-center ">
      <figure className="w-full h-fit">
        <Image src={footballBanner} alt={""} />
      </figure>
      <form action={authorizeAdmin} className="w-fit mx-auto z-50" >
        <h2 className="text-2xl text-baltic-sea-800 font-squada drop-shadow-md font-medium ">INGRESA LA CONTRASEÑA DE ADMINISTRADOR</h2>
        <hr />
      <input
      className="font-semibold outline-none block mx-auto my-5 text-center p-2 rounded-md shadow-lg"
      type="text" id="password" name="password"/>
      <button type="submit" className="bg-baltic-sea-700 rounded-2xl px-4 py-1 font-semibold text-baltic-sea-50 text-xs shadow-md">INGRESAR</button>
      {formState === "incorrect" && <span className="block text-sm text-red-500 font-medium my-2">contraseña incorrecta</span>}
      </  form>
    </div>
  )
}

export default LoginAdmin