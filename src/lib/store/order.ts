import { atomWithImmer } from 'jotai/immer'

export enum ORDER_TYPE {
    recent = 'created_at_date',
    trending = 'trending_date'
}

const order: ORDER_TYPE = ORDER_TYPE.trending

export const orderAtom = atomWithImmer(order)
