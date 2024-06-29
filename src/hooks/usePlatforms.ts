import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import { IPlatform } from "../entities/IPlatform"
import APIClient from "../services/api-client"

const apiClient = new APIClient<IPlatform>("/platforms/lists/parents")

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  })
}
export default usePlatforms
