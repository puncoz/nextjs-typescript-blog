import axios from "axios"

const API_BASE_URL = process.env.NEXT_API_BASE_URL

export const fetcher = async (endpoint: string) => {
    const url = `${API_BASE_URL}${endpoint}`
    const {data} = await axios.get(url)

    return data
}
