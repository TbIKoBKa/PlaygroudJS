// Core
import React, { FC } from 'react';

// Containers
import { MainBody, Footer, Header } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const Main: FC = () => {
    return (
        <S.Container>
            <Header />
            <MainBody />
            <Footer />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
