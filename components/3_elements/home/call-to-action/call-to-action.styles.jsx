import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const CallToActionStyles = styled(ContentStyles)`

    .bs-cta__text {
        grid-column-start: 2;
        grid-column-end: 7;
        display: flex;
        flex-direction: column;

        div {
            margin-bottom: ${ props => props.theme.spaceM }px;
        }

        .sm-button {
            margin-right: auto;
        }
    }

    .bs-cta__image {
        grid-column-start: 7;
        grid-column-end: 13;
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-cta__text {
            grid-column-start: 1;
            grid-column-end: 6;
        }

        .bs-cta__image {
            grid-column-start: 7;
            grid-column-end: 13;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {

        .bs-cta__text {
            grid-column-start: 1;
            grid-column-end: 13;
        }

        .bs-cta__image {
            grid-column-start: 1;
            grid-column-end: 13;
            margin-bottom: ${ props => props.theme.spaceS }px;
            
        }
    }

`