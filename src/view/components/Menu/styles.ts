// Core
import styled from 'styled-components';

interface MenuProps {
    open: boolean,
}

export const Container = styled.section<MenuProps>(({ open }) => ({
    display:         'flex',
    flexDirection:   'column' as 'column',
    height:          '100%',
    backgroundColor: 'rgb(60, 65, 97)',
    borderRadius:    '8px',
    overflow:        'hidden',
    width:           `${open ? '100%' : 'fit-content'}`,
    transition:      'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;',
}));

export const MenuBody = styled.div(() => ({
    position:   'relative' as 'relative',
    transition: 'height .2s ease-in-out',
}));
