import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const HeaderStyles = styled('div')`
    width: 100vw;
    height: 100vh;
    position: relative;

    .bs-home-header__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        .bs-image {
            object-fit: cover;

            span {
                height: 100% !important;
                width: 100% !important;
            }

            img {
                object-fit: cover;
                object-position: bottom left;
            }
        }
    }

    .bs-home-header__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        width: ${ props => props.theme.contentWidthL }px;
        max-width: 100%;
        margin: 0 auto;
        padding: ${ props => props.theme.spaceM }px;

        .bs-home-header__wordmark {
            mix-blend-mode: difference;
            font-size: ${ props => props.theme.fontSizeWordmark };
            line-height: 0.7;
        }

        .bs-home-header__strapline {
            mix-blend-mode: difference;
            font-size: ${ props => props.theme.fontSizeXXL };
            line-height: 0.7;
        }
    }

    @media screen and ( min-width: ${ props => props.theme.breakpointXL }px) {
        .bs-home-header__background {
            .bs-image img {
                object-position: bottom left;
            }
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointXL }px) {
        height: 70vw;
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-home-header__content {

            /* color: yellow; */

            .bs-home-header__wordmark {
                font-size: 14vw;
            }

            .bs-home-header__strapline {
                font-size: ${ props => props.theme.fontSizeXL };
            }
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {

        .bs-home-header__content {

            .bs-home-header__strapline {
                font-size: ${ props => props.theme.fontSizeM };
            }
        }
    }
`