// Core
import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';

// Elements
import { CodeInputArea } from '../../elements';

// Styles
import { ContentContainer, Container, Navigation, NavItem } from './styles';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useSettings } from '../../../bus/settings';
import { useOpenFiles } from '../../../bus/openFiles';

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
            isCodeAreaVisible,
        },
        setTogglerAction,
    } = useTogglersRedux();

    const [ activeFileId, setActiveFileId ] = useState('');

    const { settings } = useSettings();
    const { openFiles } = useOpenFiles();

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

    useEffect(() => {
        console.log(activeFileId);
        if (openFiles) {
            onChangeCode(openFiles.find((file) => file.id === activeFileId)?.content || '');
        }
    }, [ activeFileId ]);

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
                <Navigation>
                    {openFiles?.map((file) => (
                        <NavItem
                            active = { file.id === activeFileId }
                            key = { file.id }
                            onClick = { () => setActiveFileId(file.id) }>
                            {file.fullpath.split('/').at(-1)}
                        </NavItem>
                    )) }
                </Navigation>
                <div style = {{ position: 'relative', height: '100%', width: '100%' }}>
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
                </div>
            </ContentContainer>
        </Container>
    );
};
