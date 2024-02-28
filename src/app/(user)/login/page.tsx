import loginTeamImage from "@public/LoginTeamImage.png"
import Image from "next/image"
import Link from "next/link"
import LoginUserForm from "./LoginUserForm"

const page = async() => {

  return (
    <main className="h-screen grid place-items-center">

      <Image src={loginTeamImage} alt="login Team Image" fill={true} className="object-cover object-center fixed -z-10" />
      <div className="bg-primary-500/80 p-4 text-center rounded-md grid gap-4">
      <LoginUserForm/>
        <Link href="/" className="text-xs underline">¿Olvidaste tu contraseña?</Link>
      </div>
    </main>
  )
}



export default page