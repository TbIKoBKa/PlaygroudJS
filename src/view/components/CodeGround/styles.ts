// Core
import styled from 'styled-components';

// Interfaces
interface ContentContainerProps {
    max?: boolean
    active?: boolean
}

export const Container = styled.section(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    width:         '100%',
    height:        '100%',
}));

export const ContentContainer = styled.div<ContentContainerProps>(({ max, active }) => ({
    backgroundColor:          'rgb(51, 55, 82)',
    borderRadius:             '6px',
    height:                   `${max && active ? '100%' : 'auto'}`,
    width:                    '100%',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));
