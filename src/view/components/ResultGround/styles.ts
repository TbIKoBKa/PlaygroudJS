// Core
import styled from 'styled-components';

interface MessageWrapperProps {
    type: 'warning' | 'error' | 'log'
}

enum MessageWrapperBackgroundColors {
    log = '#3f4466',
    warning = '#f2b200',
    error = '#ff3333'
}

export const Container = styled.section(() => ({
    display:        'flex',
    flexDirection:  'column' as 'column',
    justifyContent: 'space-between',
    width:          '100%',
    height:         '100%',
    overflowY:      'hidden' as 'hidden',
}));

export const ResultContainer = styled.div(() => ({
    backgroundColor: 'transparent',
    height:          '100%',
    width:           '100%',
    overflowY:       'auto' as 'auto',
}));

export const Button = styled.button(() => ({
    minHeight:       '50px',
    backgroundColor: 'rgb(40, 43, 64)',
    borderRadius:    '6px',
    color:           '#fff',
    fontFamily:      'inherit',
    fontSize:        '20px',
}));

export const MessageWrapper = styled.div<MessageWrapperProps>(({ type }) => ({
    padding:                  '12px 20px',
    backgroundColor:          `${MessageWrapperBackgroundColors[ type ]}`,
    borderRadius:             '8px',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));
