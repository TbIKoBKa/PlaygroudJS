// Core
import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { CodeGround, ResultGround, Menu } from '../../components';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Home: FC = () => {
    const [ code, setCode ] = useState('');
    const { togglersRedux: { isMenuVisible }} = useTogglersRedux();

    const onChangeCode = (newCode: string) => {
        setCode(() => newCode);
    };

    return (
        <>
            <Container isMenuVisible = { isMenuVisible }>
                <Menu />
                <CodeGround
                    code = { code }
                    onChangeCode = { onChangeCode }
                />
                <ResultGround code = { code } />
            </Container>
            <Outlet />
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Home />
    </ErrorBoundary>
);
