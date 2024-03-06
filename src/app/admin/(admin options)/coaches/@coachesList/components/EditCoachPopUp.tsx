import React, { useContext } from 'react';
import { coachPopUpContext } from "./CoachesList"
import { IoMdCloseCircle } from 'react-icons/io';
import * as yup from 'yup';

type EditInputs = {
    userName: string;
    userLastname: string;
    userEmail: string;
    userAddress: string;
};

const schema: yup.ObjectSchema<EditInputs> = yup.object({
    userName: yup.string().required(),
    userLastname: yup.string().required(),
    userEmail: yup.string().required(),
    userAddress: yup.string().required()
});

const placeholders: Record<keyof EditInputs, string> = {
    userName: "Nombre *",
    userLastname: "Apellido *",
    userEmail: "Correo electrónico *",
    userAddress: "Dirección *",
};

const EditCoachPopUp = () => {

    const { location, coachInfo: { userName, userLastname, userEmail, userAddress }, editOpen, setEditOpen } = useContext(coachPopUpContext);

    const playerToUpdate: EditInputs = { userName, userLastname, userEmail, userAddress }

    // const { register } = useForm<EditInputs>({defaultValues: {userName, userLastname, userEmail, userAddress}, resolver: yupResolver(schema) });

    const updatePlayer = async (formData: FormData) => {
        // Implementa la lógica para actualizar al jugador aquí
    };

    return (
        <>

            {editOpen &&
                <div style={{ left: location[0], top: location[1] }} className='fixed bg-baltic-sea-700 w-40 h-60  z-50 shadow-xl text-baltic-sea-50 border-2 border-baltic-sea-950 rounded-md ml:w-52 md:h-64'>
                    <IoMdCloseCircle onClick={() => setEditOpen(false)} className='absolute right-0 m-1 text-2xl text-red-500 z-50' />
                    <form action={updatePlayer} className='relative p-2 flex flex-col justify-between h-full w-full '>
                        <span className='font-semibold text-sm ml:text-base '>Editar coach: </span>
                        {Object.keys(playerToUpdate).map((fieldName, index) => (

                            <div className='text-xs relative border-[2px] border-transparent rounded-md ml:text-sm sm:text-base'>

                                <input
                                    id={fieldName}
                                    className='peer pl-2 text-baltic-sea-50 rounded-sm outline-none bg-white/40 w-full focus:'
                                    key={index}
                                    type="text"
                                    defaultValue={playerToUpdate[fieldName as keyof EditInputs]}

                                    // {...register(fieldName as keyof EditInputs)}    
                                    placeholder=""
                                />
                                <label htmlFor={fieldName}
                                    className='absolute left-2 -top-4 peer-placeholder-shown:text-red-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xs font-semibold text-[10px] transition ml:-top-5 ml:peer-placeholder-shown:text-sm'>
                                    {placeholders[fieldName as keyof EditInputs]}
                                </label>

                            </div>

                        ))}
                        <button type="submit" className="text-sm tracking-wide font-thin bg-primary-500 rounded-lg font-squada ">ACTUALIZAR</button>
                    </form>
                </div>
            }
        </>
    );
};

export default EditCoachPopUp;
