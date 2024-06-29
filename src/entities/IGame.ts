import IGenre from "./IGenre"
import IPlatform from "./IPlatform"
import IPublishers from "./IPublishers"

export default interface IGame {
  id: number
  name: string
  slug: string
  description_raw: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
  rating_top: number
  genres: IGenre[]
  publishers: IPublishers[]
}
