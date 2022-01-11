// Core
import styled from 'styled-components';

// Interfaces
interface ContentContainerProps {
    maxSize?: boolean
    active?: boolean
}

interface NavItemProps {
    active?: boolean
}

export const Container = styled.section(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    width:         '100%',
    height:        '100%',
}));

export const ContentContainer = styled.div<ContentContainerProps>(({ maxSize, active }) => ({
    position:                 'relative',
    backgroundColor:          'rgb(51, 55, 82)',
    borderRadius:             '6px',
    height:                   `${maxSize && active ? '100%' : 'auto'}`,
    width:                    '100%',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));

export const Navigation = styled.nav(() => ({
    height: 'fit-content',
}));

export const NavItem = styled.button<NavItemProps>(({ theme, active }) => ({
    display:         'inline-block',
    position:        'relative',
    margin:          0,
    overflow:        'hidden',
    fontFamily:      'Trebuchet MS',
    backgroundColor: `${active ? 'rgb(82, 89, 133)' : 'rgb(71,77,115)'}`,
    border:          '2px outset #393e5c',
    color:           theme.font,
    cursor:          'pointer',
    borderRadius:    '2px',
    padding:         '6px 14px',
    fontSize:        '14px',
}));
