// Core
import styled from 'styled-components';

interface ContainerProps {
    isMenuVisible: boolean
}

export const Container = styled.main<ContainerProps>(({ isMenuVisible }) => ({
    display:                        'grid',
    gridTemplateColumns:            `${isMenuVisible ? '20vw 1fr 20vw' : '50px 1fr 20vw'}`,
    columnGap:                      '12px',
    justifyContent:                 'space-between',
    fontSize:                       '18px',
    height:                         'inherit',
    [ '@media(max-width: 768px)' ]: {
        gridTemplateColumns: '1fr',
        rowGap:              '12px',
    },
}));
