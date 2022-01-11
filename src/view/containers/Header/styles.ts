// Core
import styled from 'styled-components';

export const Container = styled.header(() => ({
    display:             'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    backgroundColor:     'rgb(56, 61, 91)',
    padding:             '0 18px',
}));

export const ContainerItem = styled.div(() => ({
    display:             'flex',
    alignItems:          'center',
    justifyContent:      'center',
    [ '&:first-child' ]: {
        justifyContent: 'flex-start',
    },
    [ '&:last-child' ]: {
        justifyContent: 'flex-end',
    },
}));
