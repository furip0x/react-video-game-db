import { Heading } from "@chakra-ui/react"
import { IGameQuery } from "../App"
import useGenres from "../hooks/UseGenres"

interface Props {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres()
  const genre = data?.results.find((g) => g.id === gameQuery.genreId)
  const platform = data?.results.find((p) => p.id === gameQuery.platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <Heading as="h1" fontSize="5xl" marginTop={5} marginBottom={7}>
      {heading}
    </Heading>
  )
}

export default GameHeading
