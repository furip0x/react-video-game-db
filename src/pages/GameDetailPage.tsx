import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import GameScreenshots from "../components/GameScreenshots"
import GameTrailer from "../components/GameTrailer"
import useGame from "../hooks/useGame"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)

  if (isLoading) return <Spinner size="lg" />

  if (error || !game) throw error

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={3}>
      <GridItem>
        <Heading marginBottom={2}>{game.name}</Heading>
        <Box marginBottom={4}>
          <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        </Box>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Box marginBottom={2}>
          <GameTrailer gameId={game.id} />
        </Box>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage
