import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import { IGenre } from "./hooks/UseGenres"
import { IPlatform } from "./hooks/useGames"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  )

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
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main" paddingX="10px">
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
