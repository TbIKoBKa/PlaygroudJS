// Core
import React, { FC } from 'react';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useSettings } from '../../../bus/settings';
import { useFileSystem } from '../../../bus/filesystem';

// Elements
import { Accordion, Addition, FileSystem, Settings } from '../../elements';

// Styles
import { Container, MenuBody } from './styles';

// Icons
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Menu: FC = () => {
    const { settings, setFontSize, setTabSize } = useSettings();
    const { filesystem, createNewFile, saveFile, setActiveFile } = useFileSystem();

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
        const link = 'mailto:zhenya.mormul@gmail.com';
        window.open(link, 'MailTo');
    };

    const onTelegramButtonClick = () => {
        const link = 'https://t.me/TblKoBKa';
        window.open(link, 'Telegram');
    };

    const onCreateFileButtonClick = () => {
        createNewFile({ type: 'file', name: 'test.txt' });
    };

    const onCreateDirectoryButtonClick = () => {
        createNewFile({ type: 'directory', name: 'test' });
    };

    const onClickFile = (fullPath: string) => {
        setActiveFile({ fullPath });
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
                    <FileSystem
                        filesystem = { filesystem }
                        isFileSystemVisible = { isFileSystemVisible }
                        isMenuVisible = { isMenuVisible }
                        toggleFileSystemVisibility = { toggleFileSystemVisibility }
                        onClickFile = { onClickFile }
                        onCreateDirectoryButtonClick = { onCreateDirectoryButtonClick }
                        onCreateFileButtonClick = { onCreateFileButtonClick }
                    />
                    <Settings
                        isMenuVisible = { isMenuVisible }
                        isSettingVisible = { isSettingVisible }
                        settings = { settings }
                        toggleSettingsVisibility = { toggleSettingsVisibility }
                        onChangeFontSize = { onChangeFontSize }
                        onChangeTabSize = { onChangeTabSize }
                    />
                    <Addition
                        isAdditionVisible = { isAdditionVisible }
                        isMenuVisible = { isMenuVisible }
                        toggleAdditionVisibility = { toggleAdditionVisibility }
                        onEmailButtonClick = { onEmailButtonClick }
                        onTelegramButtonClick = { onTelegramButtonClick }
                    />
                </MenuBody>
            </Accordion>
        </Container>
    );
};
