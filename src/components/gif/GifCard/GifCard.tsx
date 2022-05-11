import { GiphyModel } from "@/services/gifs"
import { WrapItem, Box, Image, Flex, useClipboard, IconButton, useToast, Badge } from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"

export const GifCard = ({ gif }: { gif: GiphyModel }): JSX.Element => {

    const { onCopy: onCopyURL } = useClipboard(gif.bitly_url)
    const toast = useToast({
        duration: 1000,
        isClosable: true,
        position: 'top-right'
    })

    const copyURL = () => {
        onCopyURL()
        toast({
            title: 'Gif link copied',
            status: 'success',
        })
    }

    return (
        <WrapItem >
            <Box w='250px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image h='200px' w='100%' src={gif.images.fixed_height.url} alt={gif.slug} />
                <Box p='6'>
                    <Box
                        my='2'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {gif.title}
                    </Box>
                    <Flex alignItems='center'>
                        <IconButton
                            onClick={copyURL}
                            aria-label="copy"
                            icon={<CopyIcon />}
                            color={'black'}
                        />

                        <Badge
                            ml={5}
                            colorScheme='blue'
                            h='fit-content'
                        >
                            Rating: {gif.rating}
                        </Badge>
                    </Flex>

                </Box>
            </Box>
        </WrapItem>
    )
}
