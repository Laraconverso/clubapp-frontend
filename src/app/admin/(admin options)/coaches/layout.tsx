import { ReactNode, Suspense } from "react"
import LoadingCoaches from "./@coachesList/loading"


export function playersLayout({ children, coachesList }: { children: ReactNode, coachesList: ReactNode }) {

    return (
        <>
            <h1 className="font-bauhs text-4xl text-center mb-4">GESTIÓN DE ENTRENADORES</h1>
            <div className="grid md:grid-cols-5 gap-10 md:gap-0 md:px-10">
                <div className="w-full h-full col-span-3 ">
                    <Suspense fallback={<LoadingCoaches/>}>
                    {coachesList}
                    </Suspense>
                </div>
                <div className="w-full h-full col-span-3 md:col-span-2">
                {children}
                </div>
            </div>
        </>
    )
}

export default playersLayout