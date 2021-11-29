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
    transition:      'width .2s linear',
}));

// export const MenuHeader = styled.div<MenuProps>(({ open }) => ({
//     display:        'flex',
//     flexDirection:  'row' as 'row',
//     justifyContent: 'space-between',
//     padding:        '16px',
//     cursor:         'pointer',
//     borderRadius:   '6px',
//     [ '&:hover' ]:  {
//         backgroundColor: 'rgb(63, 68, 102)',
//     },
// }));

export const MenuBody = styled.div(() => ({
    position:   'relative' as 'relative',
    padding:    '16px',
    transition: 'height .2s ease-in-out',
}));
