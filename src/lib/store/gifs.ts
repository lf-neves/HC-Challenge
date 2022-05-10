import { GiphyModel } from '@/services/gifs'
import { atomWithImmer } from 'jotai/immer'

const gifs: Array<GiphyModel> = []

export const gifsAtom = atomWithImmer(gifs)
