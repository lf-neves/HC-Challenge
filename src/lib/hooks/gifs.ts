import * as React from 'react';
import { useAtom } from 'jotai';
import { gifsAtom, orderAtom, ORDER_TYPE } from '../store';
import { GiphyModel } from '@/services/gifs';

// SORT HANDLERS
const recent = (gif1: GiphyModel, gif2: GiphyModel): number =>
  new Date(gif1.import_datetime) <= new Date(gif2.import_datetime) ? 1 : -1;

const trending = (gif1: GiphyModel, gif2: GiphyModel): number =>
  new Date(gif1.trending_datetime) <= new Date(gif2.trending_datetime) ? 1 : -1;

export const useSortedArray = () => {
  const [gifs] = useAtom(gifsAtom);
  const [order] = useAtom(orderAtom);
  const sortHandler = order === ORDER_TYPE.recent ? recent : trending;

  const teste = React.useMemo(() => {
    const newGifs = [...gifs];
    return newGifs.sort(sortHandler);
  }, [gifs, sortHandler]);

  return teste;
};
