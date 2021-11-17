// Core
import React, { FC, Suspense } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router';

// Pages
import { Main } from '../pages';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <Spinner /> }>
            <RouterRoutes>
                <Route
                    element = { <Main /> }
                    path = '/'
                />
            </RouterRoutes>
        </Suspense>
    );
};
