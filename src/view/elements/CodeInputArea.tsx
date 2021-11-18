// Core
import styled from 'styled-components';

// Interfaces
interface CodeInputAreaProps {
    fontSize?: number | null
}

export const CodeInputArea = styled.textarea<CodeInputAreaProps>(({ fontSize }) => ({
    resize:          'none' as 'none',
    border:          0,
    color:           '#fff',
    outline:         0,
    backgroundColor: 'transparent',
    width:           '100%',
    height:          '100%',
    fontSize:        `${fontSize ? `${fontSize}px` : '14px'}`,
}));
