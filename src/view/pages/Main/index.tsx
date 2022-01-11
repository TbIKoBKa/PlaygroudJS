// Core
import React, { FC } from 'react';

import { useTogglersRedux } from '../../../bus/client/togglers';

// Containers
import { MainBody, Footer, Header } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Modal, ModalHeader, ModalBody } from '../../elements';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { togglersRedux: { isAuthModalVisible }, setTogglerAction } = useTogglersRedux();

    const setAuthModalVisible = (value: boolean) => setTogglerAction({ type: 'isAuthModalVisible', value });

    return (
        <S.Container>
            <Header setAuthModalVisible = { setAuthModalVisible } />
            <MainBody />
            <Footer />
            <Modal
                setVisible = { setAuthModalVisible }
                visible = { isAuthModalVisible }>
                <ModalHeader setVisible = { setAuthModalVisible } />
                <ModalBody />
            </Modal>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
