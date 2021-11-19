// Core
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Elements
import { Accordion, CodeInputArea, Slider } from '../../elements';

// Styles
import { ContentContainer, Container } from './styles';

// Interfaces
interface PropTypes {
    code: string,
    onChangeCode: (newCode: string) => void
}

export const CodeGround: FC<PropTypes> = ({ code, onChangeCode }) => {
    const {
        togglersRedux: {
            isCodeTextareaFocused,
            isSettingVisible,
            isAdditionVisible,
            isCodeAreaVisible,
        },
        setTogglerAction,
    } = useTogglersRedux();

    const [ fontSize, setFontSize ] = useState<number | null>(null);

    const onSettingsHeaderClick = () => setTogglerAction({ type: 'isSettingVisible', value: !isSettingVisible });
    const onAdditionHeaderClick = () => setTogglerAction({ type: 'isAdditionVisible', value: !isAdditionVisible });
    const onCodeHeaderClick = () => setTogglerAction({ type: 'isCodeAreaVisible', value: !isCodeAreaVisible });

    const onChangeFontSize = (newValue: number) => {
        setFontSize(newValue);
    };

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeCode(event.target.value);
    };

    const onKeyPressCallback = (event: KeyboardEvent) => {
        if (isCodeTextareaFocused) {
            switch (event.key) {
                case 'Tab':
                    event.preventDefault();
                    onChangeCode(code + ' '.repeat(4));
                    break;
                default: break;
            }
        }
    };

    const onChangeFocusTextArea = () => {
        setTogglerAction({ type: 'isCodeTextareaFocused', value: !isCodeTextareaFocused });
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyPressCallback);

        return () => {
            document.removeEventListener('keydown', onKeyPressCallback);
        };
    }, [ isCodeTextareaFocused, code ]);

    return (
        <Container>
            <ContentContainer>
                <Accordion
                    label = 'Settings'
                    open = { isSettingVisible }
                    onClickHandle = { onSettingsHeaderClick }>
                    <Slider
                        label = 'Font Size'
                        max = { 30 }
                        min = { 10 }
                        start = { 20 }
                        step = { 1 }
                        value = { fontSize }
                        onChangeValue = { onChangeFontSize }
                    />
                </Accordion>
            </ContentContainer>
            <ContentContainer>
                <Accordion
                    label = 'Code'
                    open = { isCodeAreaVisible }
                    onClickHandle = { onCodeHeaderClick }>
                    <CodeInputArea
                        fontSize = { fontSize }
                        value = { code }
                        onBlur = { onChangeFocusTextArea }
                        onChange = { onChangeTextArea }
                        onFocus = { onChangeFocusTextArea }
                    />
                </Accordion>
            </ContentContainer>
            <ContentContainer>
                <Accordion
                    label = 'Addition'
                    open = { isAdditionVisible }
                    onClickHandle = { onAdditionHeaderClick }>

                </Accordion>
            </ContentContainer>
        </Container>
    );
};
