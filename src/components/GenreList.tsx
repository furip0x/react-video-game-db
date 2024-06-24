import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react"
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
      <List>
        {data.map((genre) => {
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
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  color={currentGenre ? "green" : ""}
                  fontStyle={currentGenre ? "bold" : "normal"}
                  flex="1"
                  justifyContent="start"
                  fontSize="lg"
                  noOfLines={1}
                  textAlign="left"
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
