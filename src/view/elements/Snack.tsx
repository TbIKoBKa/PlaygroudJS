// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Types
import { Snack as SnackType } from '../../bus/snacks/types';

// Interfaces
interface SnackProps extends SnackType {
    onClick: Function
}

// Styles
const SnackWrapper = styled.div<Pick<SnackProps, 'type'>>(({ type, theme }) => ({
    display:         'flex',
    justifyContent:  'space-between',
    padding:         '10px 22px',
    borderRadius:    '6px',
    backgroundColor: `${theme.snacks[ type ]}`,
    cursor:          'pointer',
    fontSize:        '20px',
    transition:      'transform .2s ease-out ',
    [ '&:hover' ]:   {
        transform: 'scale(1.1, 1.1)',
    },
    [ '&:not(:first-child)' ]: {
        marginBottom: '8px',
    },
}));

export const Snack: FC<SnackProps> = ({ title, type, onClick }) => (
    <SnackWrapper
        type = { type }
        onClick = { () => onClick() }>
        <FontAwesomeIcon
            icon = { faExclamationCircle }
            style = {{ marginRight: '6px' }}
        />
        {title}
    </SnackWrapper>
);
