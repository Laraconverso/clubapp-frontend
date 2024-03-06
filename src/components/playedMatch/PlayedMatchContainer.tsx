import CardContainer from "../CardContainer"

import PlayedMatch from "./PlayedMatch"

const PlayedMatchContainer = () => {
  return (
    <>
      <CardContainer title={"FECHA JUGADA"} info={<PlayedMatch/>}/>
    </>
  )
}
export default PlayedMatchContainer