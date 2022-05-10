import { Flex, IconButton, Input } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'

export type SearchForm = {
    searchString: string
}

export const SearchInput = ({ onSubmit, ...props }: { onSubmit: (data: SearchForm) => void }) => {
    const { handleSubmit, register } = useForm<SearchForm>()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex p={2} {...props}>
                <Input
                    mr={2}
                    placeholder='Search gif'
                    {...register('searchString', { required: true })}
                />
                <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<SearchIcon />}
                    type='submit'
                />
            </Flex>
        </form>
    )
}
