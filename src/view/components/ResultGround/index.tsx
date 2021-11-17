/* eslint-disable no-extra-parens */
/* eslint-disable no-new-func */
/* eslint-disable no-eval */
/* eslint-disable no-catch-shadow */
// Core
import React, { FC, useState } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import { Container, ResultContainer, Button, ErrorWrapper } from './styles';

// Interfaces
interface PropTypes {
    code: string
}

export const ResultGround: FC<PropTypes> = ({ code }) => {
    const [ result, setResult ] = useState<null | Array<string>>(null);
    const [ error, setError ] = useState<null | Error>(null);

    const onButtonClick = () => {
        try {
            setError(null);

            const newResult = (new Function(code))();

            setResult(newResult);
        } catch (error) {
            setError(error as Error);
        }
    };

    return (
        <Container>
            <ResultContainer>
                {
                    error
                        ? (
                            <ErrorWrapper>
                                <Label>{error.message}</Label>
                            </ErrorWrapper>
                        )
                        : <Label>{result}</Label>
                }
            </ResultContainer>
            <Button onClick = { onButtonClick }>Result</Button>
        </Container>
    );
};
