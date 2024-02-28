import { cookies } from "next/headers"
import LoginAdmin from "./forms/LoginAdmin"
import ButtonViewForm from "./components/ButtonViewForm"

const page = async() => {

  const adminAuth = cookies().has("adminAuth");

  return (
    <>
  {
    !adminAuth ? <LoginAdmin/> 
    : 
   

    <div className="w-full h-full flex ">
       {/* <figure className="w-full">
          <Image src={footballAdminBanner} className="object-cover" alt={"Football banner"}/>
        </figure> */}
       
      <ButtonViewForm/>
    </div>
  
  }
  </>
  )
}


export default page