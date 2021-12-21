// Core
import React, { FC } from 'react';

// Elements
import { Accordion, Slider } from '.';

// Icons
import { faCog } from '@fortawesome/free-solid-svg-icons';

// Types
import { Settings as SettingsType } from '../../bus/settings/types';

// Interfaces
interface SettingsProps {
    settings: SettingsType
    isSettingVisible: boolean
    isMenuVisible: boolean
    toggleSettingsVisibility: Function
    onChangeFontSize: Function
    onChangeTabSize: Function
}

export const Settings: FC<SettingsProps> = ({
    settings,
    isSettingVisible,
    isMenuVisible,
    toggleSettingsVisibility,
    onChangeFontSize,
    onChangeTabSize,
}) => {
    return (
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
    );
};

