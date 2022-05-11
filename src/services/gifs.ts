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

export const getTrendingGifs = async (pageParam: any) => {

    const offset = pageParam ? pageParam.offset : 0
    const limit = 25

    const data = await fetchWrapper.get(`${apiURL}/trending?api_key=${apiKey}&offset=${offset}&limit=${limit}`)
    return {
        response: data.data, nextCursor: {
            offset: offset + limit
        }
    }
}

export const getSearchGifs = async (searchParam: string) => {
    return fetchWrapper.get(`${apiURL}/search?api_key=${apiKey}&q=${searchParam}`)
}