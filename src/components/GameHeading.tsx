import { Heading } from "@chakra-ui/react"
import { IGameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"

interface Props {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <Heading as="h1" fontSize="5xl" marginTop={5} marginBottom={7}>
      {heading}
    </Heading>
  )
}

export default GameHeading
