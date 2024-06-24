import { SimpleGrid, Text } from "@chakra-ui/react"
import { IGenre } from "../hooks/UseGenres"
import useGames, { IPlatform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./Skeletons/GameCardSkeleton"

interface Props {
  selectedGenre: IGenre | null
  selectedPlatform: IPlatform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, isLoading, error } = useGames(selectedGenre, selectedPlatform)
  const skeletons = Array.from({ length: 6 })

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{
          base: 4,
          lg: 5,
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
    </>
  )
}

export default GameGrid
