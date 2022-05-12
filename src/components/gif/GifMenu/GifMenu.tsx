import { SearchForm, SearchInput } from '@/components/core';
import { getSearchGifs } from '@/services/gifs';
import { Wrap, WrapItem, Select } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';
import { useAtom } from 'jotai';
import { gifsAtom, orderAtom, ORDER_TYPE } from '@/lib/store';

export const GifMenu = ({ ...props }) => {
  const queryClient = useQueryClient();
  const [, setGifs] = useAtom(gifsAtom);
  const [, setOrder] = useAtom(orderAtom);

  const onSubmitSearch = async (data: SearchForm) => {
    const { data: newGifs } = await queryClient.fetchQuery('gifs', () =>
      getSearchGifs(data.searchString)
    );
    setGifs(newGifs);
  };

  return (
    <Wrap {...props}>
      <WrapItem>
        <SearchInput onSubmit={onSubmitSearch} />
      </WrapItem>
      <WrapItem minW="200px" alignItems="center">
        <Select
          w="fit-content"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}
        >
          <option value={ORDER_TYPE.recent}>Most Recent</option>
          <option value={ORDER_TYPE.trending}>Trending Date</option>
        </Select>
      </WrapItem>
    </Wrap>
  );
};
