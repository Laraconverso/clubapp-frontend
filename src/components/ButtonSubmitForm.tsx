const ButtonForm = ({ text }: any) => {
  return (
    <button type="submit"
      className="text-primary-50 p-1 px-3 text-sm bg-baltic-sea-800 w-fit self-center rounded-2xl font-squada border-2 border-baltic-sea-900 drop-shadow-md active:scale-95">
      {text}</button>
  )
}
export default ButtonForm