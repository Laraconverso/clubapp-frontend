const CardContainer = ({title, info}: any) => {
  return (
    <div className={`bg-baltic-sea-900 px-4 py-5 rounded-3xl`}>
      <section>
        <h2 className={`text-center text-xl font-bauhs text-primary-500`}>{title}</h2>
      </section>
      <section className="bg-primary-500 p-1 rounded-3xl h-40 overflow-y-scroll">
        {info}
      </section>
    </div>
  )
}
export default CardContainer