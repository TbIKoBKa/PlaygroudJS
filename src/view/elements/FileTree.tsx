// Core
import React, { FC, ReactNode, Fragment } from 'react';
import styled from 'styled-components';

// Elements
import { File } from './';

// Types
import { FileSystemState } from '../../bus/filesystem/types';

// Interfaces
interface FileTreeProps {
    filesystem: FileSystemState
    onClickFile: (fullpath: string) => void
}

// Styles
export const TreeContainer = styled.div(({ children }) => ({
    marginTop:   `${children === null ? '0px' : '12px'}`,
    [ '& > *' ]: {
        display: 'block',
        width:   '100%',
    },
}));

export const FileTree: FC<FileTreeProps> = ({ filesystem, onClickFile }) => {
    let activeDirectory = filesystem.fs;

    return (
        <TreeContainer>
            {
                activeDirectory
                    ? (function getDirectory(): ReactNode {
                        return activeDirectory.map((file, i) => {
                            const FileJSX = (
                                <File
                                    key = { file.fullPath }
                                    name = { file.name }
                                    nestCoef = { file.fullPath.split('/').length - 2 }
                                    type = { file.type }
                                    onClick = { () => onClickFile(file.fullPath) }>
                                </File>
                            );

                            if (file.type === 'directory' && typeof file.content !== 'string') {
                                activeDirectory = file.content;

                                return (
                                    <Fragment key = { i }>
                                        {FileJSX}
                                        {getDirectory()}
                                    </Fragment>
                                );
                            }

                            return FileJSX;
                        });
                    }())
                    : null
            }
        </TreeContainer>
    );
};

