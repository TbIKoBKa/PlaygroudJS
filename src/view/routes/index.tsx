// Core
import React, { FC, Suspense } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Pages
import { Main } from '../pages';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => (
    <Suspense fallback = { <Spinner /> }>
        <RouterRoutes>
            <Route
                element = { <Main /> }
                path = '/*'
            />
        </RouterRoutes>
    </Suspense>
);
