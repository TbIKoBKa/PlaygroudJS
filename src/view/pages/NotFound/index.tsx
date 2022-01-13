// Core
import React, { FC } from 'react';
import { Outlet, To } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, Label } from '../../elements';

// Styles
import { Container } from './styles';

// Icons
import { GiTerror } from 'react-icons/gi';

// Interfaces
interface NotFoundProps {
    navigateTo: (to: To) => void
}

const NotFound: FC<NotFoundProps> = ({ navigateTo }) => {
    return (
        <>
            <Container>
                <div style = {{ display: 'flex', marginBottom: '32px' }}>
                    <GiTerror size = { 140 } />
                    <Label fontSize = { 108 }>Not Found</Label>
                    <GiTerror size = { 140 } />
                </div>
                <div>
                    <Button onClick = { () => navigateTo('home') }>Home</Button>
                </div>
            </Container>
            <Outlet />
        </>
    );
};

export default ({ navigateTo }: NotFoundProps) => (
    <ErrorBoundary>
        <NotFound navigateTo = { navigateTo } />
    </ErrorBoundary>
);
