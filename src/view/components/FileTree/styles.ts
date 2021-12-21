// Core
import styled from 'styled-components';

export const TreeContainer = styled.div(({ children }) => ({
    marginTop:   `${children === null ? '0px' : '12px'}`,
    [ '& > *' ]: {
        display: 'block',
        width:   '100%',
    },
}));
