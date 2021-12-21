// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Elements
import { Button } from '.';

// Icons
import { faFileMedical, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface FileTreeControlsProps {
    activePath: string
    onCreateFile: Function
    onCreateDirectory: Function
}

// Styles
const ControlsWrapper = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
}));

const ButtonsGroup = styled.div(() => ({
    display:        'flex',
    justifyContent: 'end',
}));

export const FileTreeControls: FC<FileTreeControlsProps> = ({ activePath, onCreateDirectory, onCreateFile }) => {
    return (
        <ControlsWrapper>
            <p>{activePath || 'No active file'}</p>
            <ButtonsGroup>
                <Button
                    faIcon = { faFileMedical }
                    size = 'small'
                    onClick = { onCreateFile }
                />
                <Button
                    faIcon = { faFolderPlus }
                    size = 'small'
                    onClick = { onCreateDirectory }
                />
            </ButtonsGroup>
        </ControlsWrapper>
    );
};

