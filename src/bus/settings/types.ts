// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Settings = {
    fontSize: number,
    tabSize: number,
}

// Contracts
type BaseContact<T> = CaseReducer<Settings, PayloadAction<T>>

export type SetFontSizeContract = BaseContact<number>
export type SetTabSizeContract = BaseContact<number>
