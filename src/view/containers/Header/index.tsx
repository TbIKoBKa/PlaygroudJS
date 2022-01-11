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
    navigateTo: (to: string) => void
}

export const Header: FC<HeaderProps> = ({ navigateTo }) => {
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
                        boxShadow:    '0px 2px 6px #01020350',
                    }}
                    size = 'large'
                    onClick = { () => navigateTo('/login') }>
                    <CgProfile size = { 32 } />
                    <Label
                        fontSize = { 18 }
                        style = {{ display: 'inline-block', marginLeft: '6px' }}>
                        Login
                    </Label>
                </Button>
            </ContainerItem>
        </Container>
    );
};
