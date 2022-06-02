import styled from 'styled-components';
import { variant } from 'styled-system'
import Link from 'next/link';

export const ButtonStyles = styled('button')`
    color: ${ props => props.theme.colors.white };
    border-radius: ${ props => props.theme.borderRadiusM };
    font-size: ${ props => props.theme.fontSizeM };
    display: flex;
    gap: ${ props => props.theme.spaceS }px;
    align-items: center;
    padding: 0 !important;
    position: relative;
    text-align: left;

    .bs-button__content {
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block;
        padding: ${ props => props.theme.spaceXS }px ${ props => props.theme.spaceS }px;
        padding-right: ${ props => props.icon ? '56px' : props.theme.spaceS }px };
    }

    .bs-icon {
        position: absolute;
        right: ${ props => props.theme.spaceS }px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const ActiveButtonStyles = styled(ButtonStyles)`

`;

export const InactiveButtonStyles = styled(ButtonStyles)`

`;

export const ButtonLinkStyles = styled(Link)`
    background: yellow;
`