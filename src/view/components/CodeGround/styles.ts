// Core
import styled from 'styled-components';

interface ContentContainerProps {
    main?: boolean
}

export const Container = styled.section(() => ({
    display:       'flex',
    flexDirection: 'column' as 'column',
    width:         '100%',
    height:        '100%',
}));

export const ContentContainer = styled.div<ContentContainerProps>(({ main }) => ({
    backgroundColor:          'rgb(51, 55, 82)',
    borderRadius:             '6px',
    height:                   `${main ? '100%' : 'auto'}`,
    width:                    '100%',
    padding:                  '16px',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
}));
