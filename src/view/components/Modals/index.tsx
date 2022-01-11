// Core
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useUser } from '../../../bus/user';

// Elements
import { Label, Modal, ModalHeader, ModalBody, Input, Button } from '../../elements';

// Styles
import { StyledLabel, AuthRow, AuthFooter } from './styles';

// Icons
import { GiConfirmed } from 'react-icons/gi';

// Interface
interface AuthModalProps {
    navigateTo: (to: string) => void
}

export const AuthModal: FC<AuthModalProps> = ({ navigateTo }) => {
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const { auth } = useUser();

    return (
        <Modal navigateTo = { navigateTo }>
            <ModalHeader navigateTo = { navigateTo }>
                <Label fontSize = { 36 }>Authorization</Label>
            </ModalHeader>
            <ModalBody>
                <AuthRow>
                    <StyledLabel htmlFor = 'login'>Login:</StyledLabel>
                    <Input
                        addStyle = {{ fontSize: '28px' }}
                        id = 'login'
                        value = { login }
                        onChange = { (event) => setLogin(event.target.value) }
                    />
                </AuthRow>
                <AuthRow>
                    <StyledLabel htmlFor = 'password'>Password:</StyledLabel>
                    <Input
                        addStyle = {{ fontSize: '28px' }}
                        id = 'password'
                        type = 'password'
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                </AuthRow>
                <AuthRow>
                    <AuthFooter>
                        <Link
                            style = {{
                                fontSize:       '14px',
                                textDecoration: 'none',
                                color:          '#f1f2f3aa',
                            }}
                            to = '../register'>
                            Haven't an account? <span style = {{ color: '#f1f2f3' }}>Register</span>
                        </Link>
                        <Button
                            icon = { GiConfirmed }
                            size = 'large'
                            onClick = { () => auth({ login, password }) }>
                            Confirm
                        </Button>
                    </AuthFooter>
                </AuthRow>
            </ModalBody>
        </Modal>
    );
};

export const RegisterModal: FC<AuthModalProps> = ({ navigateTo }) => {
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const { register } = useUser();

    return (
        <Modal navigateTo = { navigateTo }>
            <ModalHeader navigateTo = { navigateTo }>
                <Label fontSize = { 36 }>Registration</Label>
            </ModalHeader>
            <ModalBody>
                <AuthRow>
                    <StyledLabel htmlFor = 'login'>Login:</StyledLabel>
                    <Input
                        addStyle = {{ fontSize: '28px' }}
                        id = 'login'
                        value = { login }
                        onChange = { (event) => setLogin(event.target.value) }
                    />
                </AuthRow>
                <AuthRow>
                    <StyledLabel htmlFor = 'password'>Password:</StyledLabel>
                    <Input
                        addStyle = {{ fontSize: '28px' }}
                        id = 'password'
                        type = 'password'
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                </AuthRow>
                <AuthRow>
                    <AuthFooter>
                        <Link
                            style = {{
                                fontSize:       '14px',
                                textDecoration: 'none',
                                color:          '#f1f2f3aa',
                            }}
                            to = '../login'>
                            Have an account? <span style = {{ color: '#f1f2f3' }}>Login</span>
                        </Link>
                        <Button
                            icon = { GiConfirmed }
                            size = 'large'
                            onClick = { () => register({ login, password }) }>
                            Confirm
                        </Button>
                    </AuthFooter>
                </AuthRow>
            </ModalBody>
        </Modal>
    );
};
