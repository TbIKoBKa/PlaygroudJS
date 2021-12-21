// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Elements
import { Button, Label } from '.';

// Icons
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

// Types
import { GeneralData } from '../../bus/filesystem/types';

// Interfaces
interface FileProps {
    name: string
    type: GeneralData['type']
    onClick: Function
    nestCoef: number
}

// Styles
const StyledFile = styled(Button)(() => ({

}));

const FileLabel = styled(Label)<Pick<FileProps, 'nestCoef'>>(({ nestCoef }) => ({
    display:         'flex',
    alignItems:      'center',
    [ '&::before' ]: {
        content:         '\'\'',
        backgroundColor: '#f1f2f3',
        height:          '8px',
        borderRadius:    '4px',
        width:           `${20 * nestCoef}px`,
        marginRight:     '6px',
    },
}));

export const File: FC<FileProps> = ({ name, type, onClick, nestCoef }) => {
    return (
        <StyledFile onClick = { onClick }>
            <FileLabel nestCoef = { nestCoef }>
                <FontAwesomeIcon
                    icon = { type === 'directory' ? faFolder : faFile }
                    style = {{ marginRight: '4px' }}
                />
                {name}
            </FileLabel>
        </StyledFile>
    );
};

