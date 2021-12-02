// Core
import React, { FC, useState } from 'react';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { CodeGround, ResultGround, Menu } from '../../components';

// Styles
import { Container } from './styles';

export const MainBody: FC = () => {
    const [ code, setCode ] = useState('');
    const { togglersRedux: { isMenuVisible }} = useTogglersRedux();

    const onChangeCode = (newCode: string) => {
        setCode(() => newCode);
    };

    return (
        <Container isMenuVisible = { isMenuVisible }>
            <Menu />
            <CodeGround
                code = { code }
                onChangeCode = { onChangeCode }
            />
            <ResultGround code = { code } />
        </Container>
    );
};
