// Core
import styled from 'styled-components';

export const Container = styled.main(() => ({
    display:                        'flex',
    alignItems:                     'center',
    justifyContent:                 'center',
    height:                         '100%',
    fontSize:                       '18px',
    [ '@media(max-width: 768px)' ]: {
        gridTemplateColumns: '1fr',
        rowGap:              '12px',
    },
}));
