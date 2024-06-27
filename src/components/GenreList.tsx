import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react"
import useGenres, { IGenre } from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import GenreSkeleton from "./Skeletons/GenreSkeleton"

interface Props {
  onSelectGenre: (genre: IGenre) => void
  selectedGenre: IGenre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
          const currentGenre = genre.id === selectedGenre?.id

          return (
            <ListItem key={genre.id} paddingY={2}>
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
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  color={currentGenre ? "green" : ""}
                  fontStyle={currentGenre ? "bold" : "normal"}
                  justifyContent="start"
                  fontSize="lg"
                  textAlign="left"
                  whiteSpace="wrap"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GenreList
