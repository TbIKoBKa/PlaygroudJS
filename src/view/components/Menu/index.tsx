// Core
import React, { FC, useState } from 'react';

// Elements
import { Label, Accordion } from '../../elements';

// Styles
import { Container, MenuBody } from './styles';

// Icons
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Menu: FC = () => {
    const [ isOpen, setIsOpen ] = useState(true);

    const onClickHeaderHandle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Container open = { isOpen }>
            <Accordion
                direction = 'horizontal'
                faIcon = { faBars }
                label = 'Menu'
                open = { isOpen }
                onClickHandle = { onClickHeaderHandle }>
                <Label>Hello</Label>
                <MenuBody  />
            </Accordion>
        </Container>
    );
};
