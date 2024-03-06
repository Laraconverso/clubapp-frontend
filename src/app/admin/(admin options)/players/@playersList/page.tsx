import { NextResponse } from "next/server"
import dynamic from "next/dynamic";


const apiBaseURL = process.env.API_BASE_URL 

const getPlayers = async () => {
  try {
    const data = await fetch(`${apiBaseURL}/players/list`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Player[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const PlayersList = dynamic(()=> import('./components/PlayersList'),{ssr: false})

import React from 'react'
import { unstable_noStore } from "next/cache";
import { Player } from "@/models/admin.model";

const page =async () => {
unstable_noStore()
    const data = await getPlayers()

    const players = await data.json() as Player[]
  
  return (

        <PlayersList players={players}  />
  )
}

export default page