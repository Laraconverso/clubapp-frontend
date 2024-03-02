import tiktok from '@public/tiktok.png'
import instagram from '@public/instagram.png'
import facebook from '@public/facebook.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={`bg-baltic-sea-950 text-baltic-sea-50 p-5 flex flex-col md:flex-row items-center justify-between w-screen bottom-0`}>
      <div className={`flex gap-2 md:gap-8 mb-4 md:mb-0`}>
        <section>2024 ClubAPP</section>
        <section className={`flex gap-2 md:gap-8`}>
          <p className={`cursor-pointer`}>Privacidad</p>
          <p className={`cursor-pointer`}>Términos</p> {/* Términos debería tener tilde */}
        </section>
      </div>
      <div className={`flex gap-5`}>
        <Image src={tiktok} width="30" height="30" alt='tiktok'/>
        <Image src={instagram} width="30" height="30" alt='instagram'/>
        <Image src={facebook} width="30" height="30" alt='facebook'/>
      </div>
    </footer>
  )
}
export default Footer