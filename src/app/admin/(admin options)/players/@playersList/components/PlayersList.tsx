'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import EditPlayerPopUp from "./EditPlayerPopUp";
import DeletePlayerPopUp from "./DeletePlayerPopUp";
import { IoReload } from "react-icons/io5";
import { Player } from "@/models/admin.model";

type PlayerPopUp = {
  playerInfo: Player
  location: number[],
  setLocation:  Dispatch<SetStateAction<number[]>>,
  setInfo: Dispatch<SetStateAction<Player>>
  editOpen: boolean,
  setEditOpen: Dispatch<SetStateAction<boolean>>,
  deleteOpen: boolean,
  setDeleteOpen: Dispatch<SetStateAction<boolean>>,
}

export const playerPopUpContext = createContext<PlayerPopUp>({ 
  playerInfo: {
    userName: '',
    userLastname: '',
    userDni: '',
    userEmail: '',
    userAddress: '',
    userPassword: '',
    playerId: 0,
    playerBirthdate: '',
    categoryName: ''
  },
  location: [0, 0],
  setLocation: () => {},
  setInfo: () => {},
  editOpen: false,
  setEditOpen: () => {},
  deleteOpen: false,
  setDeleteOpen: () => {},
})


const PlayersList = ({ players }: { players: Player[] }) => {

  const [popUpInfo, setPopUpInfo] = useState<Player>({playerId: 0, playerBirthdate: "", userAddress: "", userName: "",  userDni: "", userEmail: "" , userPassword: "", userLastname: "", categoryName:""})
  const [popUpLocation, setPopUpLocation] = useState([0,0])
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const [playersList, setPlayersList] = useState<Player[]>(players)

  const filterPlayers = (filterValue: string) => {
    const filtered = players.filter(p => p.userName.toLowerCase().includes(filterValue.toLowerCase()) || p.userDni.toString().includes(filterValue))
    setPlayersList(filtered)
  }

  

  return (
    <>


      <section className="relative flex flex-col justify-between w-full bg-baltic-sea-900 text-baltic-sea-900 max-h-96 py-3 rounded-md ml:px-3 md:h-96">
      <button onClick={()=> setPlayersList(players)} className="absolute right-0 bottom-0 z-20 text-white text-3xl p-2 active:rotate-180 duration-200"><IoReload /></button>
        <div className="overflow-y-auto rounded-sm">
          <playerPopUpContext.Provider value={{
              location: popUpLocation,
              playerInfo: popUpInfo,
              setInfo: setPopUpInfo,
              setLocation: setPopUpLocation,
              editOpen,
              setEditOpen,
              deleteOpen,
              setDeleteOpen,
            }} >
              <EditPlayerPopUp/>
              <DeletePlayerPopUp/>
            <table summary="Lista completa de jugadores de ClubApp" className="relative w-full text-xs overflow-y-scroll ml:text-sm sm:text-base md:text-lg">

              <caption className="text-3xl font-squada drop-shadow-sm mb-3 text-primary-500">LISTADO DE JUGADORES</caption>
              <thead >

                <tr className="sticky top-0 m-3 text-base bg-baltic-sea-600 z-10 text-baltic-sea-50">
                  <th scope="col" className="text-left pl-8">Nombre</th>
                  <th scope="col">DNI</th>
                </tr>
              </thead>
              <tbody className="text-center whitespace-nowrap bg-baltic-sea-300">

                {playersList.map(player => <PlayerRow key={player.playerId} player={player} />
                )}

              </tbody>
            </table>

          </playerPopUpContext.Provider>

        </div>
        <div className="flex m-3 mb-0">
          <label htmlFor="playerFilter" className="text-baltic-sea-50 font-squada">BUSCAR JUGADOR: </label>
          <input type="text" className="mx-3 pl-4 font-semibold rounded-sm outline-none" name="playerFilter" id="playerFilter" onChange={(e) => filterPlayers(e.target.value)} />
        </div>
      </section>
    </>
  )
}

const PlayerRow = ({ player}: { player: Player }) => {

  const resize = (x:number, y:number) => {
    const clientX = Math.min(window.innerWidth - 208, x)
    const clientY = Math.min(window.innerHeight - 288, y)

    return [clientX, clientY]
  }

  const { userAddress, userDni, userEmail, userLastname, userName } = player

  const playerName = userName + " " + userLastname

  const {setInfo, setLocation, setEditOpen, setDeleteOpen} = useContext(playerPopUpContext)

  return (
    <>
      <tr className="relative has-[:checked]:bg-white/50 text-baltic-sea-900 odd:bg-black/10  even:bg-white/10">
        <th scope="row" className=" peer  block">
          <div className="relative peer group flex items-center *:mx-2">
            <input type="checkbox" className=" z-10 absolute left-0 opacity-0" />
            <IoMdArrowDropdownCircle className="group-has-[:checked]:text-blue-500" />
            {playerName}
          </div>
          <section className="hidden text-xs font-light peer-has-[:checked]:flex items-center justify-around">
            <div className="flex flex-col text-left my-3 *:text-xs gap-3 sm:*:text-md md:*:text-base ">
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Correo: </b>{userEmail}</span>
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Direccion: </b>{userAddress}</span>
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Estado membresía</b></span>
            </div>
            <div className="flex *:text-lg *:mx-3 sm:*:text-2xl md:text-3xl lg:text-4xl">
              <MdDelete className="text-primary-600" onClick={(e) =>{ setInfo(player); setDeleteOpen(true);setEditOpen(false) ;setLocation(resize(e.clientX, e.clientY))}} />
              <FaUserEdit onClick={(e) =>{ setInfo(player); setEditOpen(true); setDeleteOpen(false);setLocation(resize(e.clientX, e.clientY))}}/>
            </div>
          </section>
        </th>
        <td className="mx-4">{userDni}</td>
      </tr>
    </>
  )
}


export default PlayersList