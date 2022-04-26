import styled from 'styled-components'
import defaultTheme from '../../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const FooterStyles = styled('div')`
    width: ${ props => props.theme.contentWidthL }px;
    max-width: 100%;
    margin: 0 auto;
    padding: ${ props => props.theme.spaceM }px;

    .bs-footer__info {
        grid-column: span 3;
    }

    .bs-footer__menu {
        grid-column: span 3;
    }

    .bs-footer__map {
        grid-column: span 3;
    }

    .bs-footer__copyright {
        grid-column: span 12;
        grid-row: 2;
        text-align: center;
        display: block;

        a {
            margin-left: 5px;
        }
    }
`