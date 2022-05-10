import { Page, PageBody, PageHeader, NavMenu } from "@/components/core"
import { GifBoard } from '@/components/gif'
import { getTrendingGifs } from "@/services/gifs"
import { useEffect } from "react"
import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { gifsAtom } from "@/lib/store"
import { useSortedArray } from "@/lib/hooks"

export const Home = (): JSX.Element => {

    const { data, isLoading } = useQuery('trendingGifs', getTrendingGifs)
    const [, setGifs] = useAtom(gifsAtom)

    const sortedGifs = useSortedArray()

    useEffect(() => {
        if (data)
            setGifs(data.data)
    }, [data])

    if (isLoading) return <>Loading ...</>

    return (
        // <Page px={5}>
        <Page>
            <PageHeader>
                <NavMenu />
            </PageHeader>
            <PageBody>
                <GifBoard gifs={sortedGifs} />
            </PageBody>
        </Page>
    )
}