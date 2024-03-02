import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Dispatch, SetStateAction, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { authDNI } from "@/auth";

const Unlogged = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    
  return (
    <div>
      <button onClick={toggleNavbar} className="group bg-primary-500 font-squada rounded-3xl p-1 px-2  text-baltic-sea-900">
        <p className="group-active:scale-95">Inicia sesión</p>
        </button>
      {
        isOpen && <Login setIsOpen={setIsOpen} />
      }
    </div>
  )
}

type Inputs = {
  dni: string,
}

const schema: yup.ObjectSchema<Inputs> = yup.object({
  dni: yup.string().required("Ingresa un DNI"),
})

const Login = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const router = useRouter()
  const [LoginState, setLoginState] = useState<"none" | "loading" | "notFound">("none")

  const closeModal = () => {
    setIsOpen(false)
  }

  const { register, formState: { errors }, trigger } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const validateData = async (form: FormData) => {

    const validForm = await trigger()
    if (!validForm) return;

    setLoginState("loading")
    const done = await authDNI(form)
    if (!done) {
      setLoginState("notFound")
      return;
    }
    redirect("/login")
  }

  return (

    <div className="fixed inset-0 max-w-screen max-h-screen flex text-primary-500 justify-center">
      <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-20  backdrop-filter backdrop-blur-sm" onClick={closeModal} />

      <div className="relative flex flex-col bg-silver-50 bg-opacity-80 rounded-2xl text-center gap-7 z-10 my-auto py-4 text-wrap max-w-xs items-center">
        <button className="font-semibold absolute top-3 right-5 cursor-pointer z-10" onClick={closeModal}>x</button>

        <p className="text-2xl font-bauhs drop-shadow-md">Ingresa tu DNI</p>
        <form action={validateData} className="flex flex-col gap-4 w-screen sm:w-fit sm:p-4">
          <div className="py-2 px-4 bg-silver-50 rounded-2xl flex flex-col text-left text-silver-950 shadow-md">
            <input type="text" {...register("dni")} className="bg-primary-200 p-1 focus-visible:outline-primary-700 focus-visible:bg-primary-100 rounded-md font-semibold text-center "
              placeholder="DNI" />
            <span className="text-center text-xs">{errors.dni?.message}</span>
          </div>
          {
            LoginState === "loading" ? <span>Cargando...</span> : <button className="bg-silver-950 font-bold text-sm-600 w-fit py-1 px-4 m-auto rounded-3xl hover:scale-105 transition drop-shadow-md" type="submit" >INGRESAR</button>
          }
        </form>
        {
          LoginState === "notFound" && <p className="text-sm">El usuario no ha sido encontrado en nuestra base de datos</p>
        }
      </div>
    </div>

  )
}


export default Unlogged