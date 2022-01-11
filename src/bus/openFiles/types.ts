// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export interface File {
    id: string
    fullpath: string
    content: string
}
export type OpenFiles = Array<File>
export type OpenFilesState = OpenFiles | null

// Contracts
type BaseContact<T> = CaseReducer<OpenFilesState, PayloadAction<T>>

export type SetOpenFilesContract = BaseContact<OpenFiles>
export type AddOpenFileContract = BaseContact<File>
export type RemoveOpenFileContract = BaseContact<Pick<File, 'fullpath'>>
