import { SearchForm, SearchInput } from "@/components/core";
import { getSearchGifs } from "@/services/gifs";
import { HStack, Select } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useAtom } from 'jotai'
import { gifsAtom, orderAtom, ORDER_TYPE } from "@/lib/store";


export const GifMenu = ({ ...props }) => {

    const queryClient = useQueryClient()
    const [, setGifs] = useAtom(gifsAtom)
    const [, setOrder] = useAtom(orderAtom)

    const onSubmitSearch = async (data: SearchForm) => {
        const { data: newGifs } = await queryClient.fetchQuery('gifs', () => getSearchGifs(data.searchString))
        setGifs(newGifs)
    }

    return (
        <HStack {...props}>
            {/* <SearchInput mr={5} w='md' onSubmit={onSubmitSearch} /> */}
            <SearchInput onSubmit={onSubmitSearch} />
            <Select w='fit-content' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}>
                <option value={ORDER_TYPE.recent}>Most Recent</option>
                <option value={ORDER_TYPE.trending}>Trending Date</option>
            </Select>
        </HStack>
    )
} 
