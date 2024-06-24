import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface IGenre {
  id: number
  name: string
  slug: string
  image_background: string
}

interface IFetchGenresResponse {
  count: number
  results: IGenre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)

    apiClient
      .get<IFetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { genres, error, isLoading } as const
}

export default useGenres
