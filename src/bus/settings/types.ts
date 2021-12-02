// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Settings = {
    fontSize: number,
}
export type SettingsState = Settings

// Contracts
type BaseContact<T> = CaseReducer<SettingsState, PayloadAction<T>>

export type SetFontSizeContract = BaseContact<number>
