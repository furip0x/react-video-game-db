import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import { IGenre } from "./hooks/UseGenres"
import { IPlatform } from "./hooks/useGames"

export interface IGameQuery {
  genre: IGenre | null
  platform: IPlatform | null
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
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingX="10px">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
