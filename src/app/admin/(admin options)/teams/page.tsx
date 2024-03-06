import { Category, Player } from '@/models/admin.model';
import { unstable_noStore } from 'next/cache';
import { NextResponse } from 'next/server';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const apiBaseURL = process.env.API_BASE_URL

const getCategories = async () => {
  try {
    const data = await fetch(`${apiBaseURL}/categories/list`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Category[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}



const teamsPage = async () => {
  unstable_noStore()
  const data = await getCategories()
  const categories = await data.json() as Category[]

  // const categories = [
  //   {

  //     categoryName: "2004",
  //     coach: "sebasrt",
  //     players: ["sebastianPlayer", "sebastianPlayer2"]
  //   },
  //   {
  //     categoryName: "2005",
  //     coach: "sebasrt2005",
  //     players: ["5sebastianPlayer", "5sebastianPlayer2"]
  //   },
  //   {
  //     categoryName: "2006",
  //     coach: "sebasrt2006",
  //     players: ["6sebastianPlayer", "6sebastianPlayer2", "6sebastianPlayer", "6sebastianPlayer2", "6sebastianPlayer", "6sebastianPlayer2", "6sebastianPlayer", "6sebastianPlayer2", "6sebastianPlayer", "6sebastianPlayer2"]
  //   },
  // ]


  return (
    <div className='w-full overflow-auto flex justify-center p-4 lg:px-20' >
      <div className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(_200px,1fr))] place-items-center w-full h-fit'>

        {categories.map((category, index) => (
          <CategoryTable key={index} categoryName={category.categoryName} players={category.players} coach={category.coach} />

        ))}
      </div>
    </div>
  )
}

const CategoryTable = ({ categoryName, players, coach }: {
  categoryName: string, players: Player[], coach: {
    userName: string;
    userLastname: string;
  }
}) => {
  const coachName = coach.userName + ' ' + coach.userLastname;
  
  return (

    <div className='flex flex-col justify-between gap-2 bg-baltic-sea-700 w-full h-72 text-center text-baltic-sea-50 rounded-md border-4 border-baltic-sea-900 overflow-hidden'>
      <h2 className='font-bauhs text-xl text-primary-500 mx-auto px-6 rounded-b-md bg-baltic-sea-500 w-fit'>{categoryName}</h2>
      <div className='h-full overflow-y-scroll'>
        <h3 className='bg-baltic-sea-800 font-semibold sticky top-0'>Jugadores</h3>

        <ul className='text-left p-2 '>
          {players.map((player, index) => {
            const playerName = player.userName + ' ' + player.userLastname
            return(
              <li key={index} className='odd:bg-black/10 p-2'>
              {playerName}
            </li>
          )})}
        
        </ul>
      </div>
      <div className='flex justify-around items-center pb-1'>
        <b className='text-xs'>Entrenador: </b>
        <p className='text-sm text-left'>{coachName}</p>
        <BiEdit className='text-xl fill-primary-400' />
      </div>
    </div>

  )
}

export default teamsPage;
