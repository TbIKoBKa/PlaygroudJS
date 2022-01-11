// Core
import React, { FC } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Containers
import { MainBody, Footer, Header } from '../../containers';

// Components
import { ErrorBoundary, AuthModal, RegisterModal } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const navigate = useNavigate();

    const navigateTo = (to: string) => navigate(to);

    return (
        <Container>
            <Header navigateTo = { navigateTo } />
            <MainBody />
            <Footer />
            <Routes>
                <Route
                    element = { <AuthModal navigateTo = { navigateTo } /> }
                    path = '/login'
                />
                <Route
                    element = { <RegisterModal navigateTo = { navigateTo } /> }
                    path = '/register'
                />
            </Routes>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
