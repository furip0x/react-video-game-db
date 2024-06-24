import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { IGame } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
interface Props {
  game: IGame
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2x-large">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  )
}

export default GameCard
