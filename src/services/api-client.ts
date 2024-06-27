import axios from "axios"

export interface IFetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c7c4969064443b7849e377c92e22897",
  },
})
