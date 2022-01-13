// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Label } from '../../elements';

// Styles
import { Container, Header } from './styles';

const Profile: FC = () => {
    return (
        <Container>
            <Header>
                <Label fontSize = { 48 }>Profile</Label>
            </Header>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Profile />
    </ErrorBoundary>
);
