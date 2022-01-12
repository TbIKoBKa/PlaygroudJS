// Core
import styled from 'styled-components';

export const AuthWrapper = styled.div(() => ({

}));

export const AuthRow = styled.div(() => ({
    fontSize:                 '20px',
    [ '&:not(:last-child)' ]: {
        marginBottom: '12px',
    },
    [ '&:last-child' ]: {
        marginTop: '20px',
    },
}));

export const AuthFooter = styled.div(() => ({
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
}));

export const StyledLabel = styled.label(() => ({
    color:        '#f1f2f3aa',
    fontSize:     '14px',
    marginBottom: '4px',
}));
