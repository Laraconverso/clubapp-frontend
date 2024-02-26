import Matches from "./Matches"

const FixtureContainer = () => {
  return (
    <div className={`bg-baltic-sea-900 px-4 py-5 rounded-3xl `}>
      <section>
        <h2 className={`text-center text-xl font-bauhs text-primary-500`}>FIXTURE</h2>
      </section>
      <section className="bg-primary-400 p-1 rounded-3xl overflow-y-scroll h-40">
        <Matches/>
      </section>
    </div>
  )
}
export default FixtureContainer