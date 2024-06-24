import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { IGame } from "../hooks/useGames"
import getCroppedImageUrl from "../services/image-url"
import CriticScore from "./CriticScore"
import PlatformIconList from "./PlatformIconList"
interface Props {
  game: IGame
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2x-large">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
