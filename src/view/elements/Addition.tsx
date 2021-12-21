// Core
import React, { FC } from 'react';

// Elements
import { Accordion, Button } from '.';

// Icons
import { faPlus, faInbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
            faIcon = { faPlus }
            label = 'Addition'
            labelVisible = { isMenuVisible }
            open = { isAdditionVisible }
            onClickHandle = { toggleAdditionVisibility }>
            <Button
                faIcon = { faInbox }
                onClick = { onEmailButtonClick }>
                Email
            </Button>
            <Button
                faIcon = { faPaperPlane }
                onClick = { onTelegramButtonClick }>
                Telegram
            </Button>
        </Accordion>
    );
};

