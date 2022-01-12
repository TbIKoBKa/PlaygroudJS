// Core
import React, { ChangeEvent, FC, useState, useRef } from 'react';
import styled from 'styled-components';

// Elements
import { Button, Input, ButtonsGroup } from '.';

// Icons
import { VscNewFile, VscNewFolder, VscCheck, VscClose } from 'react-icons/vsc';

// Interfaces
interface FileTreeControlsProps {
    activePath: string
    onCreateFile: Function
    onCreateDirectory: Function
    isCreatingFile: boolean
    toggleCreatingFile: (value: boolean) => void
}

// Styles
const ControlsWrapper = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
}));

export const FileTreeControls: FC<FileTreeControlsProps> = ({
    isCreatingFile,
    activePath,
    toggleCreatingFile,
    onCreateDirectory,
    onCreateFile,
}) => {
    const [ name, setName ] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [ creatingTypeFile, setCreatingTypeFile ] = useState<'file' | 'folder' | null>(null);

    const resetInput = () => {
        setName('');
        toggleCreatingFile(false);
    };

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    return (
        <ControlsWrapper>
            {
                isCreatingFile
                    ? (
                        <Input
                            addStyle = {{ marginRight: '6px' }}
                            ref = { inputRef }
                            sizes = 'small'
                            value = { name }
                            onChange = { onChangeHandle }
                        />
                    )
                    : <p>{activePath}</p>
            }
            {
                isCreatingFile
                    ? (
                        <ButtonsGroup>
                            <Button
                                addStyle = {{
                                    padding: '3px 6px',
                                }}
                                icon = { VscCheck }
                                iconProps = {{ size: 16, strokeWidth: 0.5 }}
                                size = 'small'
                                onClick = { () => {
                                    if (creatingTypeFile === 'file') {
                                        onCreateFile(name);
                                    } else {
                                        onCreateDirectory(name);
                                    }

                                    resetInput();
                                } }
                            />
                            <Button
                                addStyle = {{
                                    padding: '3px 6px',
                                }}
                                icon = { VscClose }
                                iconProps = {{ size: 16, strokeWidth: 0.5 }}
                                size = 'small'
                                onClick = { resetInput }
                            />
                        </ButtonsGroup>
                    )
                    : null
            }
            <ButtonsGroup>
                <Button
                    addStyle = {{
                        padding: '3px 6px',
                    }}
                    icon = { VscNewFile }
                    iconProps = {{ strokeWidth: 0.5, size: 16 }}
                    size = 'small'
                    onClick = { () => {
                        toggleCreatingFile(true);
                        setCreatingTypeFile('file');
                        inputRef.current?.focus();
                    } }
                />
                <Button
                    addStyle = {{
                        padding: '3px 6px',
                    }}
                    icon = { VscNewFolder }
                    iconProps = {{ strokeWidth: 0.5, size: 16 }}
                    size = 'small'
                    onClick = { () => {
                        toggleCreatingFile(true);
                        setCreatingTypeFile('folder');
                        inputRef.current?.focus();
                    } }
                />
            </ButtonsGroup>
        </ControlsWrapper>
    );
};

