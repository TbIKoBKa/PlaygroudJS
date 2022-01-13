// Core
import React, { FC } from 'react';
import { To } from 'react-router-dom';

// Elements
import { Label, Button, ButtonsGroup } from '../../elements';

// Styles
import { Container, ContainerItem, Link } from './styles';

// Icons
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';

// Interfaces
interface HeaderProps {
    navigateTo: (to: To) => void
    isLoggedIn: boolean
    pathname: string
}

export const Header: FC<HeaderProps> = ({ navigateTo, isLoggedIn, pathname }) => {
    return (
        <Container>
            <ContainerItem />
            <ContainerItem>
                <Link to = '/'>Playground</Link>
            </ContainerItem>
            <ContainerItem>
                {
                    isLoggedIn
                        ? (
                            <>
                                <ButtonsGroup addStyle = {{
                                    boxShadow:    '0px 2px 6px #01020350',
                                    borderRadius: '12px',
                                }}>
                                    <Button
                                        addStyle = {{
                                            display:      'flex',
                                            alignItems:   'center',
                                            border:       0,
                                            borderRadius: '12px',
                                        }}
                                        size = 'large'
                                        onClick = { () => navigateTo('profile') }>
                                        <CgProfile size = { 32 } />
                                    </Button>
                                    <Button
                                        addStyle = {{
                                            display:      'flex',
                                            alignItems:   'center',
                                            border:       0,
                                            borderRadius: '12px',
                                            borderLeft:   '2px solid rgb(66, 72, 107)',
                                        }}
                                        size = 'large'
                                        onClick = { () => navigateTo(`${pathname}/logout`) }>
                                        <AiOutlineLogout size = { 32 } />
                                    </Button>
                                </ButtonsGroup>
                            </>
                        )
                        : (
                            <Button
                                addStyle = {{
                                    display:      'flex',
                                    alignItems:   'center',
                                    border:       0,
                                    borderRadius: '12px',
                                    boxShadow:    '0px 2px 6px #01020350',
                                }}
                                size = 'large'
                                onClick = { () => navigateTo(`${pathname}/login`) }>
                                <CgProfile size = { 32 } />
                                <Label
                                    fontSize = { 18 }
                                    style = {{ display: 'inline-block', marginLeft: '6px' }}>
                                    Login
                                </Label>
                            </Button>
                        )
                }
            </ContainerItem>
        </Container>
    );
};
