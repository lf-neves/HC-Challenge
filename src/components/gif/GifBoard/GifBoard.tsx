import { GiphyModel } from "@/services/gifs";
import { Box, Wrap } from "@chakra-ui/react";
import { GifCard } from "@/components/gif";
import { GifMenu } from "../GifMenu";

export const GifBoard = ({ gifs }: { gifs: GiphyModel[] }): JSX.Element => {

    return (
        <Box>
            <GifMenu py={5} mb={5} ml={10} />
            <Wrap justify={'center'}>
                {gifs.map((gif, index) => (
                    <GifCard key={index} gif={gif} />
                ))}
            </Wrap>

        </Box>
    )

}
