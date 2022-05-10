import { fetchWrapper } from "./fetchWrapper"
import { apiURL, apiKey } from "@/config"

type Images = {
    fixed_height: {
        url: string
    }
}

type User = {
    name: string
}

export type GiphyModel = {
    id: string
    slug: string
    url: string
    bitly_url: string
    embed_url: string
    username: string
    source: string
    rating: string
    content_url: string
    user: User
    source_tld: string
    source_post_url: string
    update_datetime: string
    import_datetime: string
    trending_datetime: string
    images: Images
    title: string
}

export const getTrendingGifs = async () => {
    return fetchWrapper.get(`${apiURL}/trending?api_key=${apiKey}`)
}

export const getSearchGifs = async (searchParam: string) => {
    return fetchWrapper.get(`${apiURL}/search?api_key=${apiKey}&q=${searchParam}`)
}