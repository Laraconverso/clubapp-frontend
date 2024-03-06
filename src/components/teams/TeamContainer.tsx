import Team from "./Team"


const TeamContainer = () => {
  return (
    <div  className={`bg-baltic-sea-900 px-4 py-5 rounded-3xl`}>
      <section>
        <h2 className={`text-center text-xl font-bauhs text-primary-500`}>EQUIPOS</h2>
      </section>
      <section className="h-40 content-center">
        <Team/>
      </section>
    </div>
  )
}
export default TeamContainer