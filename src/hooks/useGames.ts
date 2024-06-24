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

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<IFetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
      })

    return () => controller.abort()
  }, [])

  return { games, error } as const
}

export default useGames
