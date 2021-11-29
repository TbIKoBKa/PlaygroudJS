// Core
import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState, useRef } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import parse from 'html-react-parser';

// Elements
import { Accordion, CodeInputArea, Slider } from '../../elements';

// Styles
import { ContentContainer, Container } from './styles';

//Icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Helpers
import { getParsedCode } from '../../../tools/helpers';

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
    const selectionPosition = useRef<number>(-1);
    const codeAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setFontSize(20);
    }, []);

    useEffect(() => {
        const codeAreaRefCurrent = codeAreaRef.current;
        const selectionPositionCurrent = selectionPosition.current;

        if (codeAreaRefCurrent && selectionPositionCurrent >= 0) {
            codeAreaRefCurrent.setSelectionRange(selectionPositionCurrent + 4, selectionPositionCurrent + 4);
            selectionPosition.current = -1;
        }
    }, [ code ]);

    const onSettingsHeaderClick = () => setTogglerAction({ type: 'isSettingVisible', value: !isSettingVisible });
    const onAdditionHeaderClick = () => setTogglerAction({ type: 'isAdditionVisible', value: !isAdditionVisible });
    const onCodeHeaderClick = () => setTogglerAction({ type: 'isCodeAreaVisible', value: !isCodeAreaVisible });

    const onChangeFontSize = (newValue: number) => {
        setFontSize(newValue);
    };

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeCode(event.target.value);
    };

    const onKeyDownHandle = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Tab') {
            event.preventDefault();

            if (codeAreaRef.current) {
                const selectionStart = codeAreaRef.current.selectionStart;

                onChangeCode(code.substr(0, selectionStart).concat(' '.repeat(4), code.substr(selectionStart)));

                selectionPosition.current = selectionStart;
            }
        }
    };

    const onChangeFocusTextArea = () => {
        setTogglerAction({ type: 'isCodeTextareaFocused', value: !isCodeTextareaFocused });
    };

    return (
        <Container>
            <ContentContainer>
                <Accordion
                    direction = 'vertical'
                    faIcon = { faChevronLeft }
                    label = 'Settings'
                    open = { isSettingVisible }
                    onClickHandle = { onSettingsHeaderClick }>
                    <Slider
                        label = 'Font Size'
                        max = { 30 }
                        min = { 10 }
                        step = { 1 }
                        value = { fontSize }
                        onChangeValue = { onChangeFontSize }
                    />
                </Accordion>
            </ContentContainer>
            <ContentContainer
                maxSize
                active = { isCodeAreaVisible }>
                <Accordion
                    direction = 'vertical'
                    faIcon = { faChevronLeft }
                    label = 'Code'
                    open = { isCodeAreaVisible }
                    onClickHandle = { onCodeHeaderClick }>
                    <CodeInputArea
                        fontSize = { fontSize }
                        ref = { codeAreaRef }
                        value = { code }
                        onBlur = { onChangeFocusTextArea }
                        onChange = { onChangeTextArea }
                        onFocus = { onChangeFocusTextArea }
                        onKeyDown = { onKeyDownHandle }
                    />
                    <pre style = {{
                        position: 'absolute',
                        width:    '100%',
                        height:   '100%',
                        top:      0,
                        left:     0,
                        padding:  '16px',
                        fontSize: `${fontSize ? `${fontSize}px` : '14px'}`,
                    }}>
                        {parse(getParsedCode(code))}
                    </pre>
                </Accordion>
            </ContentContainer>
            <ContentContainer>
                <Accordion
                    direction = 'vertical'
                    faIcon = { faChevronLeft }
                    label = 'Addition'
                    open = { isAdditionVisible }
                    onClickHandle = { onAdditionHeaderClick }>
                </Accordion>
            </ContentContainer>
        </Container>
    );
};
