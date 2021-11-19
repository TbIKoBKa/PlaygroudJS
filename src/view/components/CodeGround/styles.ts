// Core
import styled from 'styled-components';

export const Container = styled.section(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    width:         '100%',
    height:        '100%',
}));

export const ContentContainer = styled.div(() => ({
    backgroundColor:          'rgb(51, 55, 82)',
    borderRadius:             '6px',
    height:                   'auto',
    width:                    '100%',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));
