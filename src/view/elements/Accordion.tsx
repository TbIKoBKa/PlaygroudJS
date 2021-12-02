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
    noAnimatedHeaderIcon?: boolean,
    noBodyPadding?: boolean,
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

const AccordionHeader = styled.div<StyledAccordionProps>(({
    open, direction,
}) => ({
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
        backgroundColor: 'rgb(71, 77, 115)',
    },
}));

const AccordionBody = styled.div<StyledAccordionProps>(({ open, noBodyPadding }) => ({
    position:   'relative' as 'relative',
    padding:    `${noBodyPadding ? '0px' : '16px'}`,
    height:     '100%',
    transition: 'height .2s ease-in-out',
}));

export const Accordion: FC<AccordionProps> = ({
    open,
    onClickHandle,
    label,
    children,
    faIcon,
    direction,
    noAnimatedHeaderIcon,
    noBodyPadding,
}) => {
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
                            style = { direction === 'vertical' && !noAnimatedHeaderIcon ? {
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
                                noBodyPadding = { noBodyPadding }
                                open = { open }>
                                {children}
                            </AccordionBody>
                        );
                    }

                    return open && (
                        <AccordionBody
                            direction = { direction }
                            noBodyPadding = { noBodyPadding }
                            open = { open }>
                            {children}
                        </AccordionBody>
                    );
                }())
            }
        </AccordionWrapper>
    );
};
