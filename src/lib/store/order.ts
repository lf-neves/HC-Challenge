import { atomWithImmer } from 'jotai/immer'

export enum ORDER_TYPE {
    recent = 'recent',
    trending = 'trending_date'
}

const order: string = ORDER_TYPE.recent

export const orderAtom = atomWithImmer(order)
