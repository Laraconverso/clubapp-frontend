import { NextResponse } from "next/server";
import CreateUserForm from "../../forms/CreateUserForm";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const apiBaseUrl = process.env.API_BASE_URL


type Player = {
  userName: string,
  userLastname: string,
  userDni: string,
  userEmail: string,
  userAddress: string,
  userPassword: string,
  idPlayer: number,
  playerBirthdate: string
}

const getPlayers = async () => {
  try {
    const data = await fetch(`${apiBaseUrl}/players/listAll`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Player[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


const playersPage = async () => {

  const data = await getPlayers()

  const players = await data.json() as Player[]

  if (!data.ok) return <div>No se ha encontrado nada</div>

  return (
    <div className="w-full flex flex-col md:flex-row overflow-x-auto items-center justify-around">

      <table summary="Lista completa de jugadores de ClubApp" className="w-fit text-xs border-2 border-separate border-spacing-5">
        <caption >Lista de jugadores:</caption>
        <thead>
          <tr className="*:border-2">
            <th scope="col">Nombre</th>
            <th scope="col">DNI</th>
            <th scope="col" className="hidden sm:block">Categoría</th>
          </tr>
        </thead>
        <tbody className="text-center whitespace-nowrap">
          {players.map(player => {
            const playerName = player.userName + " " + player.userLastname;
            return (
              <tr key={player.idPlayer} className="relative has-[:checked]:bg-primary-500 ">
                <th scope="row" className="flex items-center justify-center peer has-[:checked]:bg-primary-500">
                  <div className="relative peer group">
                    <input type="checkbox" className=" z-10 absolute left-0 opacity-0" />
                    <IoMdArrowDropdownCircle className="group-has-[:checked]:text-blue-500" />
                  </div>
                  {playerName}
                </th>
                <td >{player.userDni}</td>
                <td className="hidden sm:block">{player.playerBirthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CreateUserForm />
    </div>

  )
}

export default playersPage