// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export interface User {
    name: string
}
export type UserState = User | null

// Contracts
type BaseContact<T> = CaseReducer<UserState, PayloadAction<T>>

export type SetUserContract = BaseContact<UserState>
