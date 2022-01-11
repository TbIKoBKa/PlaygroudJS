// Core
import React, { FC, useRef } from 'react';
import styled from 'styled-components';

// Elements
import { Button } from '.';

interface ModalProps {
    visible: boolean,
    setVisible: Function,
}

const ModalBackground = styled.div(() => ({
    display:         'flex',
    justifyContent:  'center',
    alignItems:      'center',
    position:        'absolute' as 'absolute',
    width:           '100%',
    height:          '100%',
    backgroundColor: '#0000003b',
    zIndex:          10000,
}));

const ModalContainer = styled.div(() => ({
    backgroundColor: '#f1f2f3',
    borderRadius:    '8px',
    color:           '#010203',
    minWidth:        '600px',
}));

export const ModalBody = styled.div(() => ({
    display:        'flex',
    justifyContent: 'center',
    padding:        '0 16px 6px',
}));

const ModalHeaderStyled = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
    padding:        '6px 16px',
}));

export const ModalHeader: FC<Omit<ModalProps, 'visible'>> = ({ setVisible, children }) => {
    return (
        <ModalHeaderStyled>
            {children}
            <div style = {{ marginLeft: '12px' }}>
                <Button
                    size = 'small'
                    onClick = { () => setVisible(false) } >
                    <svg
                        height = { 20 }
                        viewBox = '0 0 352 512'
                        width = { 20 }>
                        <path
                            d = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
                            fill = '#000'>
                        </path>
                    </svg>
                </Button>
            </div>
        </ModalHeaderStyled>
    );
};

export const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!visible) {
        return null;
    }

    return (
        <ModalBackground
            ref = { modalRef }
            onClick = { (event) => {
                const target = event.target as HTMLInputElement;

                if (target.className === modalRef.current?.className) {
                    setVisible(false);
                }
            } }>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};
