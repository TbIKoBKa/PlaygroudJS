// Core
import styled from 'styled-components';

export const Container = styled.section(() => ({
    display:          'grid',
    gridTemplateRows: '60px calc(100vh - 60px - 48px - 24px) 48px',
    rowGap:           '12px',
    height:           '100%',
    backgroundColor:  'rgb(27,34,64)',
}));
