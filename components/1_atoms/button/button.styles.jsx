import styled from 'styled-components';
import { variant } from 'styled-system'
import Link from 'next/link';

export const ButtonStyles = styled('button')`
    color: ${ props => props.theme.colors.white };
    border-radius: ${ props => props.theme.borderRadiusM };
    font-size: ${ props => props.theme.fontSizeM };
`;

export const ActiveButtonStyles = styled(ButtonStyles)`

`;

export const InactiveButtonStyles = styled(ButtonStyles)`

`;

export const ButtonLinkStyles = styled(Link)`
    background: yellow;
`