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
import { FaBars } from 'react-icons/fa';

export const Menu: FC = () => {
    const { settings, setFontSize, setTabSize } = useSettings();
    const { filesystem, createNewFile, saveFile, setActiveFile } = useFileSystem();

    const {
        togglersRedux: {
            isSettingVisible,
            isAdditionVisible,
            isFileSystemVisible,
            isMenuVisible,
            isCreatingFile,
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

    const toggleCreatingFile = (value: boolean) => {
        setTogglerAction({ type: 'isCreatingFile', value });
    };

    const onChangeFontSize = (newValue: number) => setFontSize(newValue);

    const onChangeTabSize = (newValue: number) => setTabSize(newValue);

    const onEmailButtonClick = () => {
        const link = 'mailto:zhenya.mormul@gmail.com';
        window.open(link, 'MailTo');
    };

    const onTelegramButtonClick = () => {
        const link = 'https://t.me/TblKoBKa';
        window.open(link, 'Telegram');
    };

    const onCreateFileButtonClick = (name: string) => createNewFile({ type: 'file', name });

    const onCreateDirectoryButtonClick = (name: string) => createNewFile({ type: 'directory', name });

    const onClickFile = (fullPath: string) => setActiveFile({ fullPath });

    return (
        <Container open = { isMenuVisible }>
            <Accordion
                noBodyPadding
                direction = 'horizontal'
                icon = { FaBars }
                label = 'Menu'
                labelVisible = { isMenuVisible }
                open = { isMenuVisible }
                onClickHandle = { toggleMenuVisibility }>
                <MenuBody>
                    <FileSystem
                        filesystem = { filesystem }
                        isCreatingFile = { isCreatingFile }
                        isFileSystemVisible = { isFileSystemVisible }
                        isMenuVisible = { isMenuVisible }
                        toggleCreatingFile = { toggleCreatingFile }
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
