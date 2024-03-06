import { useContext, useState } from "react"
import { coachPopUpContext } from "./CoachesList"
import { CgSpinner } from "react-icons/cg"
import { adminAuth } from "@/auth"
import { useRouter } from "next/navigation"
import { deleteCoachAction } from "@/lib/admin.actions"

const DeleteCoachPopUp = () => {
    const router = useRouter()

    const [deletingState, setDeletingState] = useState<"none" | "security" | "loading" | "done" | "failed">("none")
    const { location, coachInfo, deleteOpen, setDeleteOpen  } = useContext(coachPopUpContext)
    const [validPassword, setValidPassword] = useState(true)

    const deleteCoach = async (formData: FormData) => {

        const adminPassword = formData.get('adminPassword')?.toString()
        const playerId = formData.get('coachId')?.toString()
        
        if (!adminPassword || !playerId) return; 

        const validPassword = await adminAuth(adminPassword)

        if (!validPassword) {setValidPassword(false); return}
        setDeletingState("loading")

        const deleteCoach = await deleteCoachAction(playerId)
        if (!deleteCoach) {setDeletingState("failed"); return}
        deleteCoach && setDeletingState("done")
    }


    const coachName = coachInfo.userName + " " + coachInfo.userLastname
    return (
        <>
            {
                deleteOpen &&
                <div style={{ left: location[0], top: location[1] }} className="fixed grid gap-3 place-items-center w-40 h-48 bg-red-500 text-white/95 z-50 text-center text-sm rounded-md border-2 border-red-900 shadow-md *:block ml:text-base ml:w-52">
                    <>
                        {(
                            () => {
                                switch (deletingState) {
                                    case "security":
                                        return <form action={deleteCoach} className="*:my-5 p-2 relative">
                                            <span className="text-sm font-semibold">Ingrese la contraseña de administrador </span>
                                            <input className="hidden" name="coachId" value={coachInfo.coachNumber} />
                                            <div>
                                                <input type="text" name="adminPassword" className="w-full text-center text-baltic-sea-900" />
                                                <span className="block text-sm font-semibold text-baltic-sea-900">{!validPassword && "contraseña incorrecta"}</span>
                                            </div>
                                            <div className=" font-squada *:px-2 *:m-[2px] *:rounded-md">
                                                <button className="bg-baltic-sea-700 text-baltic-sea-50" type="button" onClick={() => setDeleteOpen(false)}>CANCELAR</button>
                                                <button className="bg-red-400 text-baltic-sea-800" type="submit">PROCEDER</button>
                                            </div>
                                        </form>;

                                    case "loading":
                                        return <div className="flex flex-col">
                                            <span className="block font-semibold">Procesando...</span>
                                            <CgSpinner className="animate-spin text-5xl mx-auto" />
                                        </div>;
                                    case "done":
                                        return <div className="flex flex-col gap-20">
                                            <span className="block my-4 font-semibold">Coach eliminado exitosamente</span>
                                            <button className="bg-baltic-sea-700 text-baltic-sea-50 px-2 py-1 font-bold rounded leading-loose"
                                                onClick={() => { setDeleteOpen(false), setDeletingState("none") }}
                                            >OK</button>
                                        </div>;
                                    case "failed":
                                        return <div className="flex flex-col gap-20">
                                        <span className="block my-4 text-sm font-semibold">Su solicitud no pudo ser procesada, si el problema persiste contacte a su proveedor de software.</span>
                                        <button className="bg-baltic-sea-700 text-baltic-sea-50 px-2 py-1 font-bold rounded leading-loose"
                                            onClick={() => { setDeleteOpen(false), setDeletingState("none") }}
                                        >OK</button>
                                    </div>
                                    default:
                                        return <>
                                            <span>Estas a punto de eliminar al coach: </span>
                                            <span><b>{coachName}</b></span>
                                            <span className="text-xs ml:text-md"><b>DNI:</b> {coachInfo.coachNumber}</span>
                                            <div className=" font-squada *:px-2 *:m-[2px] *:rounded-md">
                                                <button className="bg-baltic-sea-700 text-baltic-sea-50" onClick={() => setDeleteOpen(false)}>CANCELAR</button>
                                                <button className="bg-red-400 text-baltic-sea-800" onClick={()=> setDeletingState("security")}>PROCEDER</button>
                                            </div>
                                        </>
                                }
                            }
                        )()
                        }
                    </>
                </div>
            }
        </>
    )
}

export default DeleteCoachPopUp