import { GridItem, Image, SimpleGrid } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <SimpleGrid columns={[1, 2, 2]} spacing={2}>
      {data?.results.map((file, index) => (
        <GridItem key={index}>
          <Image width="100%" src={file.image} borderRadius={10} />
        </GridItem>
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots
