// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Elements
import { Label } from '.';

// Icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Interfaces
interface AccordionProps {
    open: boolean
    onClickHandle: Function
    label?: string
}

// Types
type StyledAccordionProps = Omit<AccordionProps, 'onClickHandle'>

// Styles
const AccordionWrapper = styled.div(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    height:        '100%',
}));

const AccordionHeader = styled.div<StyledAccordionProps>(() => ({
    display:        'flex',
    flexDirection:  'row',
    justifyContent: 'space-between',
    padding:        '16px',
    cursor:         'pointer',
    borderRadius:   '6px',
    [ '&:hover' ]:  {
        backgroundColor: 'rgb(60, 65, 97)',
    },
}));

const AccordionBody = styled.div<StyledAccordionProps>(({ open }) => ({
    padding:    '16px',
    height:     `${open ? '100%' : '0px'}`,
    transition: 'height .2s ease-in-out',
}));

export const Accordion: FC<AccordionProps> = ({ open, onClickHandle, label, children }) => {
    const onHeaderClickHandle = () => {
        onClickHandle(!open);
    };

    return (
        <AccordionWrapper>
            <AccordionHeader
                open = { open }
                onClick = { onHeaderClickHandle }>
                <Label fontSize = { 18 }>{label}</Label>
                <FontAwesomeIcon
                    icon = { faChevronLeft }
                    style = {{
                        transform:  `rotate(${open ? '-90deg' : '0deg'})`,
                        transition: 'transform .2s ease-in-out',
                    }}
                />
            </AccordionHeader>
            {
                open && (
                    <AccordionBody open = { open }>
                        {children}
                    </AccordionBody>
                )
            }
        </AccordionWrapper>
    );
};
