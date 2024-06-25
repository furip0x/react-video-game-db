import { SimpleGrid, Text } from "@chakra-ui/react"
import { IGameQuery } from "../App"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./Skeletons/GameCardSkeleton"

interface Props {
  gameQuery: IGameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 })

  if (error) return <Text>{error}</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={{
        base: 4,
        lg: 6,
      }}
    >
      {isLoading &&
        skeletons.map((_, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid
