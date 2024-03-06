// 'use client'
// import Image from "next/image"
// import { Dispatch, SetStateAction, useState } from 'react'
// import CreateUserForm from '../forms/CreateUserForm'
// import CreateDT from '../forms/CreateDT'
// import CreateMatch from '../forms/CreateMatch'
// import CreateTeam from '../forms/CreateTeam'
// import { StaticImport } from 'next/dist/shared/lib/get-img-props'
// import addPlayer from '@public/addPlayer.svg'
// import addDT from '@public/addDT.svg'
// import addTeam from '@public/addTeam.svg'
// import addMatch from '@public/addMatch.svg'

// type FormToShow = "createTeam" | "createMatch" | "createUser" | "createDT"

// const ButtonViewForm = () => {

//   const [formToShow, setFormToShow] = useState<FormToShow>("createUser")


//   return (
//     <div className='flex flex-col md:flex-row items-center justify-between '>
//       <div className=' grid grid-cols-2  gap-5 m-3 text-center p-10 font-squada  md:gap-20 max-w-sm mx-auto'>

//     <FormOption img={addTeam} title="Alta equipo" setForm={setFormToShow} option="createTeam"/>
//     <FormOption img={addDT} title="Alta DT" setForm={setFormToShow} option="createDT"/>
//     <FormOption img={addPlayer} title="Alta jugador" setForm={setFormToShow} option="createUser"/>
//     <FormOption img={addMatch} title="Alta partido" setForm={setFormToShow} option="createMatch"/>
//       </div>
//       <div className="bg-baltic-sea-200 size-full">
//         {(() => {
//           switch (formToShow) {
//             case "createUser":
//               return <CreateUserForm />
//             case "createDT":
//               return <CreateDT />
//             case "createMatch":
//               return <CreateMatch />
//             case "createTeam":
//               return <CreateTeam />
//           }
//         })()}
//       </div>
//     </div>
//   )
// }

// const FormOption = ({img, title, setForm, option}:{img: StaticImport, title: string, setForm: Dispatch<SetStateAction<FormToShow>>, option: FormToShow}) => {
  
//   return (
//     <section onClick={()=>setForm(option)} className='flex flex-col justify-around bg-baltic-sea-900 px-3 pb-2 rounded-md  border-primary-500 text-primary-50 focus:bg-baltic-sea-950 focus:border-[5px] transition box-border outline-none' tabIndex={0}>
//       <p>{title}</p>
//       <figure className='w-full overflow-hidden flex items-center justify-center rounded-md'>
//         <Image src={img} className='object-cover object-center' alt={title} />
//       </figure>
//     </section>
//   )
// }
// export default ButtonViewForm