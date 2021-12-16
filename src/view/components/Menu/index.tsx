// Core
import React, { FC } from 'react';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useSettings } from '../../../bus/settings';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Elements
import { Label, Accordion, Slider, Button } from '../../elements';

// Styles
import { Container, MenuBody } from './styles';

// Icons
import {
    faBars,
    faCog,
    faFolder,
    faFile,
    faFileAlt,
    faPlus,
    faInbox,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

export const Menu: FC = () => {
    const { settings, setFontSize, setTabSize } = useSettings();

    const {
        togglersRedux: {
            isSettingVisible,
            isAdditionVisible,
            isFileSystemVisible,
            isMenuVisible,
        },
        setTogglerAction,
    } = useTogglersRedux();

    const toggleMenuVisibility = () => {
        if (isMenuVisible) {
            setTogglerAction({ type: 'isFileSystemVisible', value: false });
            setTogglerAction({ type: 'isSettingVisible', value: false });
            setTogglerAction({ type: 'isAdditionVisible', value: false });
        }

        setTogglerAction({ type: 'isMenuVisible', value: !isMenuVisible });
    };

    const toggleFileSystemVisibility = () => {
        !isMenuVisible && toggleMenuVisibility();
        setTogglerAction({ type: 'isFileSystemVisible', value: !isFileSystemVisible });
    };

    const toggleSettingsVisibility = () => {
        !isMenuVisible && toggleMenuVisibility();
        setTogglerAction({ type: 'isSettingVisible', value: !isSettingVisible });
    };

    const toggleAdditionVisibility = () => {
        !isMenuVisible && toggleMenuVisibility();
        setTogglerAction({ type: 'isAdditionVisible', value: !isAdditionVisible });
    };

    const onChangeFontSize = (newValue: number) => {
        setFontSize(newValue);
    };

    const onChangeTabSize = (newValue: number) => {
        setTabSize(newValue);
    };

    const onEmailButtonClick = () => {
        console.log('handle');

        const link = 'mailto:zhenya.mormul@gmail.com';
        window.open(link, 'MailTo');
    };

    const onTelegramButtonClick = () => {
        console.log('handle');

        const link = 'https://t.me/TblKoBKa';
        window.open(link, 'Telegram');
    };

    return (
        <Container open = { isMenuVisible }>
            <Accordion
                noBodyPadding
                direction = 'horizontal'
                faIcon = { faBars }
                label = 'Menu'
                labelVisible = { isMenuVisible }
                open = { isMenuVisible }
                onClickHandle = { toggleMenuVisibility }>
                <MenuBody>
                    <Accordion
                        noAnimatedHeaderIcon
                        bodyStyle = {{
                            backgroundColor: 'rgb(52, 57, 84)',
                        }}
                        direction = 'vertical'
                        faIcon = { faFileAlt }
                        label = 'File System'
                        labelVisible = { isMenuVisible }
                        open = { isFileSystemVisible }
                        onClickHandle = { toggleFileSystemVisibility }>
                        <Label fontSize = { 36 }>File System</Label>
                    </Accordion>
                    <Accordion
                        bodyStyle = {{
                            display:         'flex',
                            justifyContent:  'space-between',
                            flexWrap:        'wrap',
                            backgroundColor: 'rgb(52, 57, 84)',
                        }}
                        direction = 'vertical'
                        faIcon = { faCog }
                        label = 'Settings'
                        labelVisible = { isMenuVisible }
                        open = { isSettingVisible }
                        onClickHandle = { toggleSettingsVisibility }>
                        <Slider
                            label = 'Font Size'
                            max = { 30 }
                            min = { 10 }
                            step = { 1 }
                            value = { settings.fontSize }
                            onChangeValue = { onChangeFontSize }
                        />
                        <Slider
                            label = 'Tab Size'
                            max = { 10 }
                            min = { 1 }
                            step = { 1 }
                            value = { settings.tabSize }
                            onChangeValue = { onChangeTabSize }
                        />
                    </Accordion>
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
                </MenuBody>
            </Accordion>
        </Container>
    );
};
