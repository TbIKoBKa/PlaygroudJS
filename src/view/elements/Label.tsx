// Core
import styled from 'styled-components';

interface LabelProps {
    display?: 'block' | 'inline',
    fontSize?: number,
    color?: string,
    textAlign?: 'left' | 'right' | 'center',
    margin?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number
}

export const Label = styled.p<LabelProps>(({
    display, fontSize, color, textAlign, margin, marginBottom, marginLeft, marginRight, marginTop,
}) => ({
    display:      `${display ?? 'block'}`,
    fontSize:     `${fontSize ? `${fontSize}px` : 'initial'}`,
    color:        `${color ?? 'inherit'}`,
    textAlign:    `${textAlign ?? 'left'}`,
    margin:       `${margin ?? 'initial'}`,
    marginTop:    `${marginTop ? `${marginTop}px` : 'initial'}`,
    marginRight:  `${marginRight ? `${marginRight}px` : 'initial'}`,
    marginBottom: `${marginBottom ? `${marginBottom}px` : 'initial'}`,
    marginLeft:   `${marginLeft ? `${marginLeft}px` : 'initial'}`,
}));
