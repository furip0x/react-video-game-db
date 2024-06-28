import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"
import GenreSkeleton from "./Skeletons/GenreSkeleton"

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore((s) => s.setGenreId)

  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <GenreSkeleton />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => {
          const currentGenre = genre.id === selectedGenreId

          return (
            <ListItem key={genre.id} paddingY={2}>
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="ghost"
                width="100%"
                fontStyle={currentGenre ? "bold" : "normal"}
                backgroundColor={currentGenre ? "green" : "transparent"}
                justifyContent="start"
                fontSize="lg"
                textAlign="left"
                whiteSpace="wrap"
              >
                <HStack>
                  <Image
                    flexShrink="0"
                    boxSize="32px"
                    borderRadius="8px"
                    src={getCroppedImageUrl(genre.image_background)}
                    border="2px"
                    borderColor={currentGenre ? "green" : "transparent"}
                    objectFit="cover"
                  />
                  <Text>{genre.name}</Text>
                </HStack>
              </Button>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GenreList
