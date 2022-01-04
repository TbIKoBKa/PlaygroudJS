// Core
import { useDispatch } from 'react-redux';

// Actions
import { openFilesActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
import { File } from './types';

export const useOpenFiles = () => {
    const dispatch = useDispatch();
    const openFiles = useSelector((state) => state.openFiles);

    const { addOpenFile, removeOpenFile } = openFilesActions;

    return {
        openFiles,
        addOpenFile:    (file: File) => dispatch(addOpenFile(file)),
        removeOpenFile: (file: Pick<File, 'fullpath'>) => dispatch(removeOpenFile(file)),
    };
};
