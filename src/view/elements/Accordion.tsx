// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Elements
import { Label } from '.';

// Icons
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface AccordionProps {
    open: boolean
    onClickHandle: Function
    label?: string
    faIcon?: IconDefinition
    direction: 'vertical' | 'horizontal',
}

// Types
type StyledAccordionProps = Omit<AccordionProps, 'onClickHandle'>

// Styles
const AccordionWrapper = styled.div<StyledAccordionProps>(({ direction, open }) => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    height:        '100%',
    width:         `${(function() {
        if (direction === 'horizontal') {
            if (open) {
                return '100%';
            }

            return '50px';
        }

        return '100%';
    }())}`,
}));

const AccordionHeader = styled.div<StyledAccordionProps>(({ open, direction }) => ({
    display:        'flex',
    flexDirection:  'row',
    justifyContent: `${(function() {
        if (direction === 'horizontal') {
            if (open) {
                return 'space-between';
            }

            return 'center';
        }

        return 'space-between';
    }())}`,
    padding:       '16px',
    cursor:        'pointer',
    borderRadius:  '6px',
    [ '&:hover' ]: {
        backgroundColor: 'rgb(60, 65, 97)',
    },
}));

const AccordionBody = styled.div<StyledAccordionProps>(({ open }) => ({
    position:   'relative' as 'relative',
    padding:    '16px',
    height:     '100%',
    transition: 'height .2s ease-in-out',
}));

export const Accordion: FC<AccordionProps> = ({ open, onClickHandle, label, children, faIcon, direction }) => {
    const onHeaderClickHandle = () => {
        onClickHandle(!open);
    };

    return (
        <AccordionWrapper
            direction = { direction }
            open = { open } >
            <AccordionHeader
                direction = { direction }
                open = { open }
                onClick = { onHeaderClickHandle }>
                { (function() {
                    const labelJSX = <Label fontSize = { 18 }>{label}</Label>;

                    if (direction === 'horizontal') {
                        if (open) {
                            return labelJSX;
                        }

                        return null;
                    }

                    return labelJSX;
                }()) }
                {
                    faIcon && (
                        <FontAwesomeIcon
                            icon = { faIcon }
                            style = { direction === 'vertical' ? {
                                transform:  `rotate(${open ? '-90deg' : '0deg'})`,
                                transition: 'transform .2s ease-in-out',
                            } : {} }
                        />
                    )
                }
            </AccordionHeader>
            {
                (function() {
                    if (direction === 'horizontal') {
                        return (
                            <AccordionBody
                                direction = { direction }
                                open = { open }>
                                {children}
                            </AccordionBody>
                        );
                    }

                    return open && (
                        <AccordionBody
                            direction = { direction }
                            open = { open }>
                            {children}
                        </AccordionBody>
                    );
                }())
            }
        </AccordionWrapper>
    );
};
