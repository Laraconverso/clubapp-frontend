import footballTeam from '@public/footballteam.jpeg'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='flex gap-1 overflow-x-scroll lg:max-w-md'>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
      <Image src={footballTeam} width="200" height="200" alt='equipo'/>
    </div>
  )
}
export default Team