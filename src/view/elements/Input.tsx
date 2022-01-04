// Core
import styled, { CSSProperties } from 'styled-components';

// Interfaces
interface InputProps {
    sizes?: 'small' | 'medium' | 'large',
    addStyle?: CSSProperties
}

// Styles
const Input = styled.input<InputProps>(({ theme, sizes = 'small', addStyle }) => ({
    position:        'relative',
    margin:          0,
    width:           '100%',
    fontFamily:      'Trebuchet MS',
    backgroundColor: 'rgb(71,77,115)',
    border:          '2px solid #393e5c',
    color:           theme.font,
    outline:         0,
    lineHeight:      0,
    borderRadius:    `${(() => {
        if (sizes === 'small') {
            return '4px';
        } else if (sizes === 'medium') {
            return '8px';
        }

        return '12px';
    })()}`,
    padding: `${(() => {
        if (sizes === 'small') {
            return '2px 10px';
        } else if (sizes === 'medium') {
            return '4px 14px';
        }

        return '6px 24px';
    })()}`,
    fontSize: `${(() => {
        if (sizes === 'small') {
            return '14px';
        } else if (sizes === 'medium') {
            return '18px';
        }

        return '22px';
    })()}`,
    ...addStyle,
}));

export { Input };
