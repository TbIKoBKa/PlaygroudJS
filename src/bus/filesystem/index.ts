// Core
import { useDispatch } from 'react-redux';

// Actions
import { filesystemActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
import * as types from './types';

export const useFileSystem = () => {
    const dispatch = useDispatch();
    const filesystem = useSelector((state) => state.filesystem);
    const { setFileSystem, setActiveFile, createNewFile, saveFile } = filesystemActions;

    return {
        filesystem,
        setFileSystem: (payload: types.FileSystemState) => dispatch(setFileSystem(payload)),
        setActiveFile: (payload: types.SetActiveFileFullPathPayload) => dispatch(setActiveFile(payload)),
        createNewFile: (payload: types.AddFileToFileSystemPayload) => dispatch(createNewFile(payload)),
        saveFile:      (payload: types.SaveFileTextContentFileSystemPayload) => dispatch(saveFile(payload)),
    };
};
