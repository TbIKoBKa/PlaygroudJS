// Core
import styled from 'styled-components';

export const Container = styled.main(() => ({
    display:                        'grid',
    gridTemplateColumns:            'repeat(2, 1fr)',
    columnGap:                      '20px',
    justifyContent:                 'space-between',
    backgroundColor:                'rgb(27, 34, 64)',
    padding:                        '12px 0px',
    fontSize:                       '18px',
    height:                         'inherit',
    [ '@media(max-width: 768px)' ]: {
        gridTemplateColumns: '1fr',
        rowGap:              '12px',
    },
}));
