import { SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { IGameQuery } from "../App"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./Skeletons/GameCardSkeleton"

interface Props {
  gameQuery: IGameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGames(gameQuery)
  const skeletons = Array.from({ length: 6 })
  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  if (error) return <Text>{error.message}</Text>

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      style={{ width: "100%" }}
      loader={<h4>Loading...</h4>}
    >
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
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid
