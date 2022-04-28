import styled from 'styled-components'
import defaultTheme from '../../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const FooterStyles = styled('div')`
    width: ${ props => props.theme.contentWidthL }px;
    max-width: 100%;
    margin: 0 auto;
    padding: ${ props => props.theme.spaceM }px;
    padding-bottom: ${ props => props.theme.spaceXS }px;

    .bs-footer__info {
        grid-column: span 6;

        .bs-footer__info__wordmark {
            font-family: ${ props => props.theme.fontFamilySpecial };
            font-size: ${ props => props.theme.fontSizeL };
        }
    }

    .bs-footer__menu {
        grid-column: span 6;
        font-family: ${ props => props.theme.fontFamilySpecial };

        ul {
            height: 100%;
            display: flex;
            justify-content: center;
            /* align-items: center; */
            align-items: flex-end;
            flex-direction: column;
            list-style-type: none;
        }
    }

    .bs-footer__map {
        grid-column: span 4;
        display: none;
    }

    .bs-footer__copyright {
        grid-column: span 12;
        grid-row: 2;
        text-align: center;
        display: block;
        font-size: ${ props => props.theme.fontSizeXS };
        margin-top: ${ props => props.theme.spaceM }px;

        .bs-footer__copyright__wordmark {
            font-family: ${ props => props.theme.fontFamilySpecial };
        }

        a {
            margin-left: 5px;
        }
    }

    @media screen and (max-width: ${ props => props.theme.breakpointM - 1 }px) {
        padding: ${ props => props.theme.spaceS }px;
        padding-bottom: ${ props => props.theme.spaceXS }px; 
    }
`