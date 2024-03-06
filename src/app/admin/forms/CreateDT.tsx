'use client'
import ButtonForm from "@/components/ButtonSubmitForm"
import { createCoachAction } from "@/lib/admin.actions"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

type Inputs = {
    name: string,
    lastName: string,
    dni: string,
    email: string,
    address: string,
    password: string
}

const schema: yup.ObjectSchema<Inputs> = yup.object({
    name: yup.string().required(),
    lastName: yup.string().required(),
    dni: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    password: yup.string().required()
})
const placeholders: Record<keyof Inputs, string> = {
    name: "Nombre *",
    lastName: "Apellido *",
    dni: "DNI *",
    email: "Correo electrónico *",
    address: "Dirección *",
    password: "Contraseña *"
};

const CreateDT = () => {
    const [formState, setFormState] = useState<"userCreated" | "none">("none")

    const { register, control, reset, trigger } = useForm<Inputs>({ resolver: yupResolver(schema) })

    const createDT = async (formData: FormData) => {
        const validInputs = await trigger()
        if (!validInputs) return false;
        const created = await createCoachAction(formData)
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
        <section className="w-full flex flex-col items-center text-baltic-sea-900 p-4 gap-10">
            <h2 className="font-squada text-2xl md:text-4xl">Formulario alta <b>DT</b></h2>
            {formState === "userCreated" && <span className="animate-bounce  top-0">Usuario creado exitosamente</span>}
            <form className="flex flex-col gap-10" action={createDT}>
                <div className="grid gap-4">

                {Object.keys(schema.fields).map((fieldName, index) => (
                    <div key={index} className="bg-transparent">
                        <input {...register(fieldName as keyof Inputs)}
                            className="bg-transparent text-center md:text-left placeholder:text-baltic-sea-900 border-b-[1px] border-baltic-sea-900 outline-none"
                            placeholder={placeholders[fieldName as keyof Inputs]} />
                    </div>
                ))}
                </div>
                <ButtonForm text={"Alta DT"}/>
            </form>
            {/* <DevTool control={control} /> */}
        </section>
    )
}

export default CreateDT