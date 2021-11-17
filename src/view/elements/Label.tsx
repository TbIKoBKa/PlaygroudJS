// Core
import styled from 'styled-components';

interface LabelProps {
    display?: 'block' | 'inline',
    fontSize?: number,
    color?: string,
    textAlign?: 'left' | 'right' | 'center',
}

export const Label = styled.p<LabelProps>(({ display, fontSize, color, textAlign }) => ({
    display:   `${display ?? 'block'}`,
    fontSize:  `${fontSize ?? 'initial'}px`,
    color:     `${color ?? 'inherit'}`,
    textAlign: `${textAlign ?? 'left'}`,
}));
