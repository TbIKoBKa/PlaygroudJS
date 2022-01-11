// Core
import React, { FC } from 'react';

// Elements
import { Label, Button } from '../../elements';

// Styles
import { Container, ContainerItem } from './styles';

// Icons
import { CgProfile } from 'react-icons/cg';

// Interfaces
interface HeaderProps {
    setAuthModalVisible: (value: boolean) => void
}

export const Header: FC<HeaderProps> = ({ setAuthModalVisible }) => {
    return (
        <Container>
            <ContainerItem />
            <ContainerItem>
                <Label fontSize = { 36 }>Playground</Label>
            </ContainerItem>
            <ContainerItem>
                <Button
                    addStyle = {{
                        display:      'flex',
                        alignItems:   'center',
                        border:       0,
                        borderRadius: '12px',
                    }}
                    size = 'large'
                    onClick = { () => setAuthModalVisible(true) }>
                    <CgProfile size = { 32 } />
                    <p style = {{ display: 'inline-block', marginLeft: '6px', fontSize: '18px' }}>Login</p>
                </Button>
            </ContainerItem>
        </Container>
    );
};
