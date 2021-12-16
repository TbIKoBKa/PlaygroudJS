// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
export interface GeneralData {
    type: 'directory' | 'file'
    name: string
    created: string
    changed: string
    fullPath: string
}

export interface File extends GeneralData {
    content: string,
}

export interface Directory extends GeneralData {
    content: Array<File | Directory> | null
}

// Payload
export type SetActiveFileFullPathPayload = Pick<GeneralData, 'fullPath'>
export type AddFileToFileSystemPayload = Pick<Directory, 'name' | 'type'>
export type SaveFileTextContentFileSystemPayload = Pick<File, 'fullPath' | 'content'>

// State
export type FileSystemState = {
    fs: Array<File | Directory> | null
    activePath: GeneralData['fullPath']
}

// Contracts
type BaseContact<T> = CaseReducer<FileSystemState, PayloadAction<T>>

export type SetFileSystemContract = BaseContact<FileSystemState>
export type SetActiveFileFullPath = BaseContact<SetActiveFileFullPathPayload>
export type AddFileToFileSystemContract = BaseContact<AddFileToFileSystemPayload>
export type SaveFileTextContentFileSystemContract = BaseContact<SaveFileTextContentFileSystemPayload>
