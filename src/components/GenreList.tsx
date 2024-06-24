import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react"
import useGenres, { IGenre } from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import GenreSkeleton from "./Skeletons/GenreSkeleton"

interface Props {
  onSelectGenre: (genre: IGenre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <GenreSkeleton />

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
