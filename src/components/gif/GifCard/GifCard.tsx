import { GiphyModel } from "@/services/gifs"
import { WrapItem, Box, Image } from "@chakra-ui/react"

export const GifCard = ({ gif }: { gif: GiphyModel }): JSX.Element => {
    return (
        <WrapItem >
            <Box w='250px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image h='200px' w='100%' src={gif.images.fixed_height.url} alt={gif.slug} />
                <Box p='6'>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {gif.title}
                    </Box>
                </Box>
            </Box>
        </WrapItem>
    )
}
