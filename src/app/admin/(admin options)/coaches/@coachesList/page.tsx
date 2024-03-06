import { NextResponse } from "next/server"
import dynamic from "next/dynamic";


const apiBaseURL =process.env.API_BASE_URL 

const getPlayers = async () => {
  try {
    const data = await fetch(`${apiBaseURL}/coaches/list`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Coach[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const CoachesList = dynamic(()=> import('./components/CoachesList'),{ssr: false})

import React from 'react'
import { unstable_noStore } from "next/cache";
import { Coach } from "@/models/admin.model";

const page =async () => {
unstable_noStore()
    const data = await getPlayers()
    
    const coaches:Coach[] = data.ok?  await data.json() as Coach[] : [
      {
        coachNumber: 0,
        userName: "sebas",
        userLastname: "rt",
        userDni: "1007",
        userEmail: "rt@example.com",
        userAddress: "address",
        userPassword: "password",
        categoryId: 0,
        roleId: 3,
        clubId: 1
      }
    ]
  

  return (

        <CoachesList coaches={coaches}  />
  )
}

export default page