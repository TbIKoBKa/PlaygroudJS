// Core
import React, { FC, CSSProperties } from 'react';
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
    labelVisible?: boolean,
    bodyStyle?: CSSProperties,
    headerStyle?: CSSProperties,
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
    transition: 'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;',
}));

const AccordionHeader = styled.div<StyledAccordionProps>(({
    open, direction, labelVisible,
}) => ({
    display:        'flex',
    flexDirection:  'row',
    justifyContent: `${(function() {
        if (labelVisible) {
            if (direction === 'horizontal') {
                if (open) {
                    return 'space-between';
                }

                return 'center';
            }

            return 'space-between';
        }

        return 'center';
    }())}`,
    padding:       '16px',
    cursor:        'pointer',
    borderRadius:  `${open ? '6px 6px 0 0' : '6px'}`,
    [ '&:hover' ]: {
        backgroundColor: 'rgb(71, 77, 115)',
        [ '& > *' ]:     {
            transform:  `${!labelVisible ? 'scale(1.3)' : 'scale(1)'}`,
            transition: 'transform .2s ease-in-out',
        },
    },
}));

const AccordionBody = styled.div<StyledAccordionProps>(({ open, noBodyPadding }) => ({
    position:     'relative' as 'relative',
    padding:      `${noBodyPadding ? '0px' : '16px'}`,
    height:       '100%',
    transition:   'height .2s ease-in-out',
    borderRadius: `${open ? '0 0 6px 6px' : '0'}`,
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
    labelVisible = true,
    bodyStyle,
    headerStyle,
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
                labelVisible = { labelVisible }
                open = { open }
                style = { headerStyle }
                onClick = { onHeaderClickHandle }>
                { (function() {
                    const labelJSX = (
                        <Label fontSize = { 18 }>
                            {label}
                        </Label>
                    );

                    if (direction === 'horizontal') {
                        if (labelVisible) {
                            return labelJSX;
                        }

                        return null;
                    }

                    if (labelVisible) {
                        return labelJSX;
                    }

                    return null;
                }()) }
                {
                    faIcon && (
                        <FontAwesomeIcon
                            icon = { faIcon }
                            style = { direction === 'vertical' && !noAnimatedHeaderIcon && labelVisible ? {
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
                                open = { open }
                                style = { bodyStyle }>
                                {children}
                            </AccordionBody>
                        );
                    }

                    return open && (
                        <AccordionBody
                            direction = { direction }
                            noBodyPadding = { noBodyPadding }
                            open = { open }
                            style = { bodyStyle }>
                            {children}
                        </AccordionBody>
                    );
                }())
            }
        </AccordionWrapper>
    );
};
