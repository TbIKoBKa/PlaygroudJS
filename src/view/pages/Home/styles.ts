// Core
import styled from 'styled-components';

interface ContainerProps {
    isMenuVisible: boolean
}

export const Container = styled.main<ContainerProps>(({ isMenuVisible }) => ({
    display:                        'grid',
    height:                         '100%',
    gridTemplateColumns:            `${isMenuVisible ? '20vw 1fr 20vw' : '50px 1fr 20vw'}`,
    columnGap:                      '12px',
    fontSize:                       '18px',
    [ '@media(max-width: 768px)' ]: {
        gridTemplateColumns: '1fr',
        rowGap:              '12px',
    },
}));
