// Core
import styled from 'styled-components';

export const Container = styled.section(() => ({
    display:          'grid',
    gridTemplateRows: '60px calc(100vh - 60px - 48px) 48px',
    height:           '100%',
}));
