'use client'
import { createUserAction } from "@/lib/admin.actions"
import { DevTool } from "@hookform/devtools"
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
    name: yup.string().required("Proporciona el nombre del jugador"),
    lastName: yup.string().required("Ingresa el apellido del jugador"),
    dni: yup.string().required("Ingresa el numero de identificación del jugador"),
    email: yup.string().email("Proporciona un Email valido").required("Ingresa el Email del jugador"),
    birthday: yup.string().required("Ingresa la fecha de nacimiento del jugador"),
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
const CreateUserForm = () => {
    const [formState, setFormState] = useState<"userCreated" | "none">("none")

    const { register, control, formState: { errors }, trigger, reset } = useForm<Inputs>({ resolver: yupResolver(schema), reValidateMode: "onChange" })

    const createUser = async (formData: FormData) => {
        const validInputs = await trigger()
        if (!validInputs) return false;
        const created = await createUserAction(formData)
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
        <section className="relative size-full flex flex-col gap-5 items-center text-baltic-sea-900 p-4">

            {formState === "userCreated"! && <span className="animate-bounce absolute top-0">Usuario creado exitosamente</span>}

            <span className="opacity-0 transition-opacity ">usuario creado correctamente</span>
            <h2 className="font-squada text-2xl md:text-4xl">Formulario alta <b>Usuario</b></h2>
            <form className="flex flex-col gap-4" action={createUser}>
                <div className="grid md:grid-cols-2 gap-4">

                    {Object.keys(schema.fields).map((fieldName, index) => (
                        <div key={index} className="bg-transparent flex flex-col">
                            <input {...register(fieldName as keyof Inputs)}
                                lang="es"
                                type={fieldName === "birthday" ? "date" : "text"}
                                name={fieldName}
                                className="bg-transparent text-center md:text-left placeholder:text-baltic-sea-900 border-b-[1px] border-baltic-sea-900 outline-none"
                                placeholder={placeholders[fieldName as keyof Inputs]} />
                            {errors[fieldName as keyof Inputs]?.message && <span className="text-sm text-red-500">{errors[fieldName as keyof Inputs]?.message}</span>}
                        </div>
                    ))}
                </div>
                <button type="submit" className="text-primary-50 p-1 px-3 text-sm bg-baltic-sea-800 w-fit self-center rounded-2xl font-squada border-2 border-baltic-sea-900 drop-shadow-md active:scale-95">Alta Socio</button>
            </form>
            {/* <DevTool control={control} /> */}
        </section>
    )
}

export default CreateUserForm