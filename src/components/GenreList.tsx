import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import useGenres, { IGenre } from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import GenreSkeleton from "./Skeletons/GenreSkeleton"

interface Props {
  onSelectGenre: (genre: IGenre) => void
  selectedGenreId?: number
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
                onClick={() => onSelectGenre(genre)}
                variant="ghost"
                width="100%"
                // color={currentGenre ? "green" : ""}
                fontStyle={currentGenre ? "bold" : "normal"}
                // borderWidth="2px"
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
