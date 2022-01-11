// Core
import React, { FC } from 'react';

// Elements
import { Accordion, Button } from '.';

// Icons
import { BsPlusLg } from 'react-icons/bs';
import { FaInbox, FaPaperPlane } from 'react-icons/fa';

// Interfaces
interface AdditionProps {
    isMenuVisible: boolean
    isAdditionVisible: boolean
    toggleAdditionVisibility: Function
    onEmailButtonClick: Function
    onTelegramButtonClick: Function
}

export const Addition: FC<AdditionProps> = ({
    isAdditionVisible,
    isMenuVisible,
    onEmailButtonClick,
    onTelegramButtonClick,
    toggleAdditionVisibility,
}) => {
    return (
        <Accordion
            bodyStyle = {{
                backgroundColor: 'rgb(52, 57, 84)',
            }}
            direction = 'vertical'
            icon = { BsPlusLg }
            label = 'Addition'
            labelVisible = { isMenuVisible }
            open = { isAdditionVisible }
            onClickHandle = { toggleAdditionVisibility }>
            <Button
                icon = { FaInbox }
                onClick = { onEmailButtonClick }>
                Email
            </Button>
            <Button
                icon = { FaPaperPlane }
                onClick = { onTelegramButtonClick }>
                Telegram
            </Button>
        </Accordion>
    );
};

