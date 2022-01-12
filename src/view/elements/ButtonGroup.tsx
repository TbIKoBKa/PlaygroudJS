// Core
import styled, { CSSProperties } from 'styled-components';

// Interfaces
interface ButtonGroupProps {
    addStyle?: CSSProperties
}

export const ButtonsGroup = styled.div<ButtonGroupProps>(({ addStyle }) => ({
    display:                  'flex',
    justifyContent:           'end',
    [ '&:not(:last-child)' ]: {
        marginRight: '6px',
    },
    [ '& > *:first-child' ]: {
        borderTopRightRadius:    0,
        borderBottomRightRadius: 0,
    },
    [ '& > *:last-child' ]: {
        borderTopLeftRadius:    0,
        borderBottomLeftRadius: 0,
    },
    [ '& > *:not(:first-child):not(:last-child)' ]: {
        borderRadius: 0,
    },
    ...addStyle,
}));
