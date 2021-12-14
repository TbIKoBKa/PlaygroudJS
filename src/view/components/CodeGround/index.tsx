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
            codeAreaRefCurrent.setSelectionRange(selectionPositionCurrent, selectionPositionCurrent);
            selectionPosition.current = -1;
        }
    }, [ code ]);

    const onCodeHeaderClick = () => setTogglerAction({ type: 'isCodeAreaVisible', value: !isCodeAreaVisible });

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeCode(event.target.value);
    };

    const onKeyDownHandle = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (codeAreaRef.current && (event.key === 'Tab' || event.key === 'Enter')) {
            event.preventDefault();

            const selectionStart = codeAreaRef.current.selectionStart;

            if (event.key === 'Tab') {
                onChangeCode(code.substring(0, selectionStart).concat(' '.repeat(settings.tabSize), code.substring(selectionStart)));
                selectionPosition.current = Number(selectionStart) + Number(settings.tabSize);
            } else if (event.key === 'Enter') {
                onChangeCode(code.substring(0, selectionStart).concat('\n', code.substring(selectionStart)));
                selectionPosition.current = selectionStart + 1;
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
