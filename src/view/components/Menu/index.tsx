// Core
import React, { FC } from 'react';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useSettings } from '../../../bus/settings';

// Elements
import { Label, Accordion, Slider } from '../../elements';

// Styles
import { Container, MenuBody } from './styles';

// Icons
import { faBars, faCog, faFolder, faFile, faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                        direction = 'vertical'
                        faIcon = { faFileAlt }
                        label = 'File System'
                        labelVisible = { isMenuVisible }
                        open = { isFileSystemVisible }
                        onClickHandle = { toggleFileSystemVisibility }>
                        <Label fontSize = { 36 }>File System</Label>
                    </Accordion>
                    <Accordion
                        bodyStyle = {{ display: 'flex', justifyContent: 'space-between' }}
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
                        direction = 'vertical'
                        faIcon = { faPlus }
                        label = 'Addition'
                        labelVisible = { isMenuVisible }
                        open = { isAdditionVisible }
                        onClickHandle = { toggleAdditionVisibility }>
                    </Accordion>
                </MenuBody>
            </Accordion>
        </Container>
    );
};
