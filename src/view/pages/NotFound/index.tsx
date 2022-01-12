// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Label } from '../../elements';

// Styles
import { Container } from './styles';

// Icons
import { GiTerror } from 'react-icons/gi';

const NotFound: FC = () => {
    return (
        <Container>
            <GiTerror size = { 140 } />
            <Label fontSize = { 108 }>Not Found</Label>
            <GiTerror size = { 140 } />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <NotFound />
    </ErrorBoundary>
);
