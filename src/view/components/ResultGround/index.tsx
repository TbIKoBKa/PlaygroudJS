/* eslint-disable no-extra-parens */
/* eslint-disable no-new-func */
/* eslint-disable no-eval */
/* eslint-disable no-catch-shadow */
// Core
import React, { FC, useState } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import { Container, ResultContainer, Button, MessageWrapper } from './styles';

// Interfaces
interface PropTypes {
    code: string
}

interface MessageType {
    type: 'warning' | 'error' | 'log',
    value: string | number,
}

const defaultLog = console.log.bind(console);
const defaultError = console.error.bind(console);
const defaultWarning = console.warn.bind(console);

export const ResultGround: FC<PropTypes> = ({ code }) => {
    const [ messages, setMessages ] = useState<null | Array<MessageType>>(null);

    console.log = (...args) => {
        defaultLog.apply(console, args);

        setMessages((prevState) => {
            let filteredLogs = args.filter((arg) => {
                if (typeof arg === 'number' || typeof arg === 'string') {
                    return true;
                }

                return false;
            });

            const logs: MessageType[] = filteredLogs.map((log) => ({ type: 'log', value: log }));

            if (prevState) {
                return [ ...prevState, ...logs ];
            }

            return logs;
        });
    };

    console.error = (...args) => {
        defaultError.apply(console, args);

        const errors: MessageType[] = [];

        setMessages((prevState) => {
            args.forEach((arg) => {
                switch (typeof arg) {
                    case 'number':
                    case 'string':
                        errors.push({ type: 'error', value: arg });
                        break;
                    case 'object':
                        errors.push({ type: 'error', value: arg.message });
                        break;
                    default: break;
                }
            });


            if (prevState) {
                return [ ...prevState, ...errors ];
            }

            return errors;
        });
    };

    console.warn = (...args) => {
        defaultWarning.apply(console, args);

        setMessages((prevState) => {
            const warnings: MessageType[] = args.map((arg) => ({ type: 'warning', value: arg }));

            if (prevState) {
                return [ ...prevState, ...warnings ];
            }

            return warnings;
        });
    };

    const onButtonClick = () => {
        try {
            console.clear();
            setMessages(null);

            (new Function(code))();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <ResultContainer>
                {
                    messages?.map((message, index) => (
                        <MessageWrapper
                            key = { index }
                            type = { message.type }>
                            <Label>{message.value}</Label>
                        </MessageWrapper>
                    ))
                }
            </ResultContainer>
            <Button onClick = { onButtonClick }>Result</Button>
        </Container>
    );
};
