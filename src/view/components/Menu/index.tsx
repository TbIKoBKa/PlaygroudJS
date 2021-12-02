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
    const { settings, setFontSize } = useSettings();

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
        setTogglerAction({ type: 'isMenuVisible', value: !isMenuVisible });
    };

    const toggleFileSystemVisibility = () => {
        setTogglerAction({ type: 'isFileSystemVisible', value: !isFileSystemVisible });
    };

    const toggleSettingsVisibility = () => setTogglerAction({ type: 'isSettingVisible', value: !isSettingVisible });
    const toggleAdditionVisibility = () => setTogglerAction({ type: 'isAdditionVisible', value: !isAdditionVisible });

    const onChangeFontSize = (newValue: number) => {
        setFontSize(newValue);
    };

    return (
        <Container open = { isMenuVisible }>
            <Accordion
                noBodyPadding
                direction = 'horizontal'
                faIcon = { faBars }
                label = 'Menu'
                open = { isMenuVisible }
                onClickHandle = { toggleMenuVisibility }>
                <MenuBody>
                    <Accordion
                        noAnimatedHeaderIcon
                        direction = 'vertical'
                        faIcon = { faFileAlt }
                        label = 'File System'
                        open = { isFileSystemVisible }
                        onClickHandle = { toggleFileSystemVisibility }>
                        <Label fontSize = { 36 }>File System</Label>
                    </Accordion>
                    <Accordion
                        direction = 'vertical'
                        faIcon = { faCog }
                        label = 'Settings'
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
                    </Accordion>
                    <Accordion
                        direction = 'vertical'
                        faIcon = { faPlus }
                        label = 'Addition'
                        open = { isAdditionVisible }
                        onClickHandle = { toggleAdditionVisibility }>
                    </Accordion>
                </MenuBody>
            </Accordion>
        </Container>
    );
};
