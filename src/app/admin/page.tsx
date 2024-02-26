import { cookies } from "next/headers"
import LoginAdmin from "./forms/LoginAdmin"
import ButtonViewForm from "./components/ButtonViewForm"
import footballAdminBanner from "@public/bannerAdmin.png"
import Image from "next/image";



const page = async() => {

  const adminAuth = cookies().has("adminAuth");

  return (
    <>
  {
    !adminAuth ? <LoginAdmin/> 
    : 
    <div className="text- center  bg-baltic-sea-100 text-baltic-sea-950">
       <figure className="w-full">
          <Image src={footballAdminBanner} className="object-cover" alt={"Football banner"}/>
        </figure>
      <h2 className="text-center text-5xl font-bauhs">Bienvenido</h2>
      <ButtonViewForm/>
    </div>
  }
  </>
  )
}


export default page