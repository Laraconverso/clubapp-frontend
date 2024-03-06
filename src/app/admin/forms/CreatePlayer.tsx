'use client'
import { createPlayerAction } from "@/lib/admin.actions"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

type Inputs = {
    name: string,
    lastName: string,
    dni: string,
    email: string,
    birthday: string,
    address: string,
}

const schema: yup.ObjectSchema<Inputs> = yup.object({
    name: yup.string().required("Ingresa el nombre del jugador"),
    lastName: yup.string().required("Ingresa el apellido del jugador"),
    dni: yup.string().required("Ingresa el DNI del jugador"),
    email: yup.string().email("Proporciona un Email valido").required("Ingresa el Email del jugador"),
    birthday: yup.string().required("Ingresa la fecha de nacimiento"),
    address: yup.string().required("Dirección de residencia del jugador"),
})
const placeholders: Record<keyof Inputs, string> = {
    name: "Nombre *",
    lastName: "Apellido *",
    dni: "DNI *",
    email: "Correo electrónico *",
    birthday: "Fecha de nacimiento *",
    address: "Dirección *",
};
const CreatePlayer = () => {
    const [formState, setFormState] = useState<"userCreated" | "none">("none")

    const { register, formState: { errors }, trigger, reset } = useForm<Inputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })

    const createUser = async (formData: FormData) => {
        const validInputs = await trigger()
        if (!validInputs) return false;
        const created = await createPlayerAction(formData)
        if (created) {
            setFormState("userCreated");
            reset();
            setTimeout(() => {
                setFormState("none")
            }, 6000);
            return true
        }
        ;
    }

    return (
        <section className="relative size-full flex flex-col gap-10 items-center text-baltic-sea-900 mb-3 sm:gap-5 ">


            <h2 className="font-squada text-3xl sm:text-3xl md:text-4xl text-center px-4">Formulario alta <b>Jugador</b></h2>
            {formState === "userCreated" && <span className="animate-bounce  top-0">Usuario creado exitosamente</span>}
            <form className="flex flex-col gap-10" action={createUser}>
                <div className="grid  gap-4">

                    {Object.keys(schema.fields).map((fieldName, index) => (
                        <div key={index} className="bg-transparent flex flex-col">
                            <input {...register(fieldName as keyof Inputs)}
                                lang="es"
                                type={fieldName === "birthday" ? "date" : "text"}
                                min="2011-01-01" max="2018-12-31"
                                name={fieldName}
                                className="bg-transparent text-center md:text-left placeholder:text-baltic-sea-900 border-b-[1px] border-baltic-sea-900 outline-none"
                                placeholder={placeholders[fieldName as keyof Inputs]} />
                            {errors[fieldName as keyof Inputs]?.message && <span className="text-xs text-red-600">{errors[fieldName as keyof Inputs]?.message}</span>}
                        </div>
                    ))}
                </div>
                <button type="submit" className="text-primary-50 p-1 px-3 text-sm bg-baltic-sea-800 w-fit self-center rounded-2xl font-squada border-2 border-baltic-sea-900 drop-shadow-md active:scale-95">Alta Socio</button>
            </form>
            {/* <DevTool control={control} /> */}
        </section>
    )
}

export default CreatePlayer