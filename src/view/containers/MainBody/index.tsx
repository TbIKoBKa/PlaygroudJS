// Core
import React, { FC, useState } from 'react';

// Components
import { CodeGround, ResultGround, Menu } from '../../components';

// Styles
import { Container } from './styles';

export const MainBody: FC = () => {
    const [ code, setCode ] = useState('');

    const onChangeCode = (newCode: string) => {
        setCode(() => newCode);
    };

    return (
        <Container>
            <Menu />
            <CodeGround
                code = { code }
                onChangeCode = { onChangeCode }
            />
            <ResultGround code = { code } />
        </Container>
    );
};
