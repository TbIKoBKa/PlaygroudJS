// Core
import styled from 'styled-components';

// Interfaces
interface ContentContainerProps {
    maxSize?: boolean
    active?: boolean
}

export const Container = styled.section(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    width:         '100%',
    height:        '100%',
}));

export const ContentContainer = styled.div<ContentContainerProps>(({ maxSize, active }) => ({
    position:                 'relative',
    backgroundColor:          'rgb(51, 55, 82)',
    borderRadius:             '6px',
    height:                   `${maxSize && active ? '100%' : 'auto'}`,
    width:                    '100%',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));
