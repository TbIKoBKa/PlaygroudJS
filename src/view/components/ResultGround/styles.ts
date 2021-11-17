// Core
import styled from 'styled-components';

export const Container = styled.section(() => ({
    display:        'flex',
    flexDirection:  'column' as 'column',
    justifyContent: 'space-between',
    width:          '100%%',
    height:         '100%',
}));

export const ResultContainer = styled.div(() => ({
    backgroundColor: 'transparent',
    height:          '100%',
    width:           '100%',
}));

export const Button = styled.button(() => ({
    padding:         '12px 20px',
    backgroundColor: 'rgb(40, 43, 64)',
    color:           '#fff',
}));

export const ErrorWrapper = styled.div(() => ({
    padding:         '12px 20px',
    backgroundColor: '#ff3333',
    borderRadius:    '8px',
}));
