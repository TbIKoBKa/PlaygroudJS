// Core
import React, { FC } from 'react';

// Elements
import { Accordion, FileTreeControls, FileTree } from '.';

// Icons
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

// Types
import { FileSystemState } from '../../bus/filesystem/types';

// Interfaces
interface FileSystemProps {
    filesystem: FileSystemState
    isCreatingFile: boolean
    isMenuVisible: boolean
    isFileSystemVisible: boolean
    toggleFileSystemVisibility: Function
    onCreateDirectoryButtonClick: Function
    onCreateFileButtonClick: Function
    toggleCreatingFile: (value: boolean) => void
    onClickFile: (fullpath: string) => void
}

export const FileSystem: FC<FileSystemProps> = ({
    filesystem,
    isCreatingFile,
    isMenuVisible,
    isFileSystemVisible,
    toggleFileSystemVisibility,
    onCreateDirectoryButtonClick,
    onCreateFileButtonClick,
    toggleCreatingFile,
    onClickFile,
}) => {
    return (
        <Accordion
            noAnimatedHeaderIcon
            bodyStyle = {{
                backgroundColor: 'rgb(52, 57, 84)',
            }}
            direction = 'vertical'
            faIcon = { faFileAlt }
            label = 'File System'
            labelVisible = { isMenuVisible }
            open = { isFileSystemVisible }
            onClickHandle = { toggleFileSystemVisibility }>
            <FileTreeControls
                activePath = { filesystem.activePath }
                isCreatingFile = { isCreatingFile }
                toggleCreatingFile = { toggleCreatingFile }
                onCreateDirectory = { onCreateDirectoryButtonClick }
                onCreateFile = { onCreateFileButtonClick }
            />
            <FileTree
                filesystem = { filesystem }
                onClickFile = { onClickFile }
            />
        </Accordion>
    );
};

