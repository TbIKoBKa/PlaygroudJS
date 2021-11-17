// Core
import React, { FC } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Header: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Label
                fontSize = { 36 }
                textAlign = 'center'>Playground
            </Label>
        </S.Container>
    );
};
