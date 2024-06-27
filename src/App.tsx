import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenreList from "./components/GenreList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import { IGenre } from "./hooks/UseGenres"
import { IPlatform } from "./hooks/usePlatforms"

export interface IGameQuery {
  genre: IGenre | null
  platform: IPlatform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingX={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
