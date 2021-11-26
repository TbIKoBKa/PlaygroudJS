// Core
import styled from 'styled-components';

// Interfaces
interface CodeInputAreaProps {
    fontSize?: number | null
}

export const CodeInputArea = styled.textarea<CodeInputAreaProps>(({ fontSize }) => ({
    resize:              'none' as 'none',
    border:              0,
    outline:             0,
    backgroundColor:     'transparent',
    fontFamily:          'Trebuchet MS',
    fontSize:            `${fontSize ? `${fontSize}px` : '14px'}`,
    position:            'absolute',
    width:               '100%',
    height:              '100%',
    top:                 0,
    left:                0,
    padding:             '16px',
    zIndex:              1000,
    color:               'inherit',
    overflow:            'hidden',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextFillColor: 'transparent',
}));
