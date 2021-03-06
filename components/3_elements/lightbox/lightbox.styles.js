import styled from 'styled-components';
import { IconStyles } from '../../../styles/global-components.styles';
import defaultTheme from '../../../styles/theme';

export const LightboxStyles = styled('div')`
    position: fixed;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: ${ props => props.theme.zIndices.modal };
    padding: ${ props => props.theme.spaceM }px;
    display: flex;
    justify-content: center;
    align-items: center;

    .bs-lightbox-backdrop {
        min-width: 50%;
        min-height: 50%;
        background: white;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: #00000099;
    }

    .bs-lightbox-wrapper {
        min-width: 50%;
        min-height: 50%;
        background: white;
    }
`

export const CloseButtonStyles = styled(IconStyles)`
    position: absolute;
    top: ${ props => props.theme.spaceM }px;
    right: ${ props => props.theme.spaceM }px;
    z-index: 1;
    cursor: pointer;
`