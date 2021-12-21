// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
export interface Snack {
    id: string,
    title: string,
    type: 'info' | 'warn' | 'error' | 'success',
}

// State
export type Snacks = Array<Snack>
export type SnacksState = Snacks | null

// Contracts
type BaseContact<T> = CaseReducer<SnacksState, PayloadAction<T>>

export type AddSnackContract = BaseContact<Snack>
export type RemoveSnackContract = BaseContact<Snack['id']>
