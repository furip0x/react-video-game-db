import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

export interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
}

interface IFetchGamesResponse {
  count: number
  results: IGame[]
}

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)

    apiClient
      .get<IFetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { games, error, isLoading } as const
}

export default useGames
