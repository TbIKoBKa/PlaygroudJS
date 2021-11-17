// Core
import React, { FC } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import * as S from './styles';

export const Footer: FC = () => {
    return (
        <S.Container>
            <Label
                fontSize = { 24 }
                textAlign = 'center'>
                Powered
            </Label>
        </S.Container>
    );
};
