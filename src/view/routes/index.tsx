// Core
import React, { FC, Suspense } from 'react';
import { Routes as RouterRoutes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

// Hooks
import { useTogglersRedux } from '../../bus/client/togglers';

// Pages
import { Home, NotFound } from '../pages';

// Containers
import { Footer, Header } from '../containers';

// Components
import { AuthModal, LogoutModal, RegisterModal } from '../components';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();

    const navigateTo = (to: string) => navigate(to);

    return (
        <Suspense fallback = { <Spinner /> }>
            <Header
                isLoggedIn = { isLoggedIn }
                navigateTo = { navigateTo }
                pathname = { location.pathname }
            />
            <RouterRoutes>
                <Route
                    element = { <Home /> }
                    path = 'home/*'>
                    {
                        isLoggedIn
                            ? (
                                <Route
                                    element = { <LogoutModal navigateTo = { navigateTo } /> }
                                    path = 'logout'
                                />
                            )
                            : (
                                <>
                                    <Route
                                        element = { <AuthModal navigateTo = { navigateTo } /> }
                                        path = 'login'
                                    />
                                    <Route
                                        element = { <RegisterModal navigateTo = { navigateTo } /> }
                                        path = 'register'
                                    />
                                </>
                            )
                    }
                    <Route
                        element = { <Navigate to = '../../error' /> }
                        path = ':p/*'
                    />
                </Route>
                <Route
                    element = { <NotFound /> }
                    path = '*'
                />
            </RouterRoutes>
            <Footer />
        </Suspense>
    );
};
