import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { IGameQuery } from "../App"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./Skeletons/GameCardSkeleton"

interface Props {
  gameQuery: IGameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 })

  if (error) return <Text>{error.message}</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={{
        base: 4,
        lg: 6,
      }}
    >
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
      {isLoading &&
        skeletons.map((_, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {hasNextPage && (
        <Flex gridColumn="1 / -1" justifyContent="center" paddingY={5}>
          <Button onClick={() => fetchNextPage()} colorScheme="gray" size="lg">
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </Flex>
      )}
    </SimpleGrid>
  )
}

export default GameGrid
