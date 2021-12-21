// Core
import React, { FC } from 'react';

// Hooks
import { useSnacks } from '../../../bus/snacks';

// Elements
import { Snack } from '../../elements';

// Styles
import { SnacksWrapper } from './styles';

export const Snacks: FC = () => {
    const { snacks, removeSnack } = useSnacks();

    if (!snacks || !snacks.length) {
        return null;
    }

    return (
        <SnacksWrapper>
            {
                snacks.map(({ id, title, type }) => (
                    <Snack
                        id = { id }
                        key = { id }
                        title = { title }
                        type = { type }
                        onClick = { () => removeSnack({ id }) }
                    />
                ))
            }
        </SnacksWrapper>
    );
};
