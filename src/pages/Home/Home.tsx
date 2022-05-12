import { getTrendingGifs } from "@/services/gifs"
import { useEffect } from "react"
import { useInfiniteQuery } from 'react-query'
import { useAtom } from 'jotai'
import { gifsAtom } from "@/lib/store"
import { useSortedArray } from "@/lib/hooks"
import { Page, PageBody, PageHeader, NavMenu } from "@/components/core"
import { GifBoard } from '@/components/gif'
import { Button, Center } from "@chakra-ui/react"

export const Home = (): JSX.Element => {

    const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'trendingGifs',
        ({ pageParam }) => getTrendingGifs(pageParam), {
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })

    const [, setGifs] = useAtom(gifsAtom)

    const sortedGifs = useSortedArray()

    useEffect(() => {
        if (data)
            setGifs(data.pages.map((page) => page.response).flat())

    }, [data])

    if (isLoading) return <>Loading ...</>

    return (
        <Page px={20}>
            <PageHeader>
                <NavMenu />
            </PageHeader>
            <PageBody>
                <GifBoard gifs={sortedGifs} />
                <Center>
                    <Button
                        my={10}
                        onClick={() => fetchNextPage()}
                        colorScheme='blue.600'
                        color='blue.600'
                        variant='outline'
                        isLoading={isLoading}
                        disabled={!hasNextPage}
                    >
                        {isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                                ? 'Load More'
                                : 'Nothing more to load'}
                    </Button>
                </Center>
            </PageBody>
        </Page>
    )
}