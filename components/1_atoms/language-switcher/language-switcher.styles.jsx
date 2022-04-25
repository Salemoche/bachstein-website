import styled from 'styled-components';

export const LanguageSwitcherStyles = styled('div')`
    background: ${ props => props.theme.backgroundColorInverted };
    color: ${ props => props.theme.fontColorInverted };
`;