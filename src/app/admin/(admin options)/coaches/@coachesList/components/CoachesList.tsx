'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import EditCoachPopUp from "./EditCoachPopUp";
import DeleteCoachPopUp from "./DeleteCoachPopUp";
import { IoReload } from "react-icons/io5";
import { Coach } from "@/models/admin.model";


type CoachPopUp = {
  coachInfo: Coach,
  location: number[],
  setLocation:  Dispatch<SetStateAction<number[]>>,
  setInfo: Dispatch<SetStateAction<Coach>>
  editOpen: boolean,
  setEditOpen: Dispatch<SetStateAction<boolean>>,
  deleteOpen: boolean,
  setDeleteOpen: Dispatch<SetStateAction<boolean>>,
}

export const coachPopUpContext = createContext<CoachPopUp>({ 
  coachInfo: {
    coachNumber: 0,
    userName: '',
    userLastname: '',
    userDni: '',
    userEmail: '',
    userAddress: '',
    userPassword: '',
    clubId: 1,
    roleId: 3,
    categoryId: 0
  },
  location: [0, 0],
  setLocation: () => {},
  setInfo: () => {},
  editOpen: false,
  setEditOpen: () => {},
  deleteOpen: false,
  setDeleteOpen: () => {},
})

const CoachesList = ({ coaches }: { coaches: Coach[] }) => {

  const [popUpInfo, setPopUpInfo] = useState<Coach>({coachNumber: 0, userName: '', userLastname: '', userDni: '', userEmail: '', userAddress: '', userPassword: '', categoryId: 0, roleId: 3, clubId: 1})
  const [popUpLocation, setPopUpLocation] = useState([0,0])
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const [coachesList, setCoachesList] = useState<Coach[]>(coaches)

  const filterCoaches = (filterValue: string) => {
    const filtered = coaches.filter(coach => coach.userName.toLowerCase().includes(filterValue.toLowerCase()) || coach.userDni.toString().includes(filterValue))
    setCoachesList(filtered)
  }

  return (
    <>
      <section className="relative flex flex-col justify-between w-full bg-baltic-sea-900 text-baltic-sea-900 max-h-96 py-3 rounded-md ml:px-3 md:h-96">
      <button onClick={()=> setCoachesList(coaches)} className="absolute right-0 bottom-0 z-20 text-white text-3xl p-2 active:rotate-180 duration-200"><IoReload /></button>
        <div className="overflow-y-auto rounded-sm">
          <coachPopUpContext.Provider value={{
              location: popUpLocation,
              coachInfo: popUpInfo,
              setInfo: setPopUpInfo,
              setLocation: setPopUpLocation,
              editOpen,
              setEditOpen,
              deleteOpen,
              setDeleteOpen,
            }} >
              <EditCoachPopUp/>
              <DeleteCoachPopUp/>
            <table summary="Lista completa de jugadores de ClubApp" className="relative w-full text-xs overflow-y-scroll ml:text-sm sm:text-base md:text-lg">

              <caption className="text-3xl font-squada drop-shadow-sm mb-3 text-primary-500">LISTADO DE ENTRENADORES</caption>
              <thead >

                <tr className="sticky top-0 m-3 text-base bg-baltic-sea-600 z-10 text-baltic-sea-50">
                  <th scope="col" className="text-left pl-8">Nombre</th>
                  <th scope="col">DNI</th>
                </tr>
              </thead>
              <tbody className="text-center whitespace-nowrap bg-baltic-sea-300">

                {coachesList.map(coach => <CoachRow key={coach.coachNumber} coach={coach} />
                )}

              </tbody>
            </table>

          </coachPopUpContext.Provider>

        </div>
        <div className="flex m-3 mb-0">
          <label htmlFor="coachFilter" className="text-baltic-sea-50 font-squada">BUSCAR ENTRENADOR: </label>
          <input type="text" className="mx-3 pl-4 font-semibold rounded-sm  outline-none" name="coachFilter" id="coachFilter" onChange={(e) => filterCoaches(e.target.value)} />
        </div>
      </section>
    </>
  )
}

const CoachRow = ({ coach}: { coach: Coach }) => {

  const resize = (x:number, y:number) => {
    const clientX = Math.min(window.innerWidth - 208, x)
    const clientY = Math.min(window.innerHeight - 288, y)

    return [clientX, clientY]
  }

  const { userAddress, userDni, userEmail, userLastname, userName } = coach

  const coachName = userName + " " + userLastname

  const {setInfo, setLocation, setEditOpen, setDeleteOpen} = useContext(coachPopUpContext)

  return (
    <>
      <tr className="relative has-[:checked]:bg-white/50 text-baltic-sea-900 odd:bg-black/10  even:bg-white/10">
        <th scope="row" className=" peer  block">
          <div className="relative peer group flex items-center *:mx-2">
            <input type="checkbox" className=" z-10 absolute left-0 opacity-0" />
            <IoMdArrowDropdownCircle className="group-has-[:checked]:text-blue-500" />
            {coachName}
          </div>
          <section className="hidden text-xs font-light peer-has-[:checked]:flex items-center justify-around">
            <div className="flex flex-col text-left my-3 *:text-xs gap-3 sm:*:text-md md:*:text-base ">
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Correo: </b>{userEmail}</span>
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Direccion: </b>{userAddress}</span>
              <span className="flex flex-col sm:flex-row sm:gap-3"><b>Estado membresía</b></span>
            </div>
            <div className="flex *:text-lg *:mx-3 sm:*:text-2xl md:text-3xl lg:text-4xl">
              <MdDelete className="text-primary-600" onClick={(e) =>{ setInfo(coach); setDeleteOpen(true);setEditOpen(false) ;setLocation(resize(e.clientX, e.clientY))}} />
              <FaUserEdit onClick={(e) =>{ setInfo(coach); setEditOpen(true); setDeleteOpen(false);setLocation(resize(e.clientX, e.clientY))}}/>
            </div>
          </section>
        </th>
        <td className="mx-4">{userDni}</td>
      </tr>
    </>
  )
}

export default CoachesList
