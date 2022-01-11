// Core
import React, { FC, useRef } from 'react';
import styled from 'styled-components';

// Elements
import { Button } from '.';

// Icons
import { VscChromeClose } from 'react-icons/vsc';

interface ModalProps {
    navigateTo: (to: string) => void,
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
    backgroundColor: 'rgb(56,61,91)',
    boxShadow:       '0px 2px 6px #010203',
    borderRadius:    '8px',
    color:           '#f1f2f3',
    minWidth:        '600px',
}));

export const ModalBody = styled.div(() => ({
    display:        'flex',
    justifyContent: 'center',
    flexDirection:  'column' as 'column',
    padding:        '0 32px 24px',
}));

const ModalHeaderStyled = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
    padding:        '24px 32px',
}));

export const ModalHeader: FC<Omit<ModalProps, 'visible'>> = ({ navigateTo, children }) => {
    return (
        <ModalHeaderStyled>
            {children}
            <div style = {{ marginLeft: '12px' }}>
                <Button
                    addStyle = {{
                        padding: '3px 6px',
                    }}
                    size = 'small'
                    onClick = { () => navigateTo('..') }>
                    <VscChromeClose
                        fill = '#f1f2f3'
                        size = { 24 }
                    />
                </Button>
            </div>
        </ModalHeaderStyled>
    );
};

export const Modal: FC<ModalProps> = ({ navigateTo, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    return (
        <ModalBackground
            ref = { modalRef }
            onClick = { (event) => {
                const target = event.target as HTMLInputElement;

                if (target.className === modalRef.current?.className) {
                    navigateTo('..');
                }
            } }>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>
    );
};
