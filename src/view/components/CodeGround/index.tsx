// Core
import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useRef } from 'react';
import parse from 'html-react-parser';

// Elements
import { Accordion, CodeInputArea } from '../../elements';

// Styles
import { ContentContainer, Container } from './styles';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useSettings } from '../../../bus/settings';

// Helpers
import { getParsedCode } from '../../../tools/helpers';

// Icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface PropTypes {
    code: string,
    onChangeCode: (newCode: string) => void
}

export const CodeGround: FC<PropTypes> = ({ code, onChangeCode }) => {
    const {
        togglersRedux: {
            isCodeTextareaFocused,
            isCodeAreaVisible,
        },
        setTogglerAction,
    } = useTogglersRedux();

    const { settings } = useSettings();

    const selectionPosition = useRef<number>(-1);
    const codeAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const codeAreaRefCurrent = codeAreaRef.current;
        const selectionPositionCurrent = selectionPosition.current;

        if (codeAreaRefCurrent && selectionPositionCurrent >= 0) {
            codeAreaRefCurrent.setSelectionRange(selectionPositionCurrent + 4, selectionPositionCurrent + 4);
            selectionPosition.current = -1;
        }
    }, [ code ]);

    const onCodeHeaderClick = () => setTogglerAction({ type: 'isCodeAreaVisible', value: !isCodeAreaVisible });

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
                        fontSize = { settings.fontSize }
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
                        fontSize: `${settings?.fontSize ? `${settings.fontSize}px` : '14px'}`,
                    }}>
                        {parse(getParsedCode(code))}
                    </pre>
                </Accordion>
            </ContentContainer>
        </Container>
    );
};
