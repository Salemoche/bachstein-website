import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const IntroStyles = styled(ContentStyles)`

    .bs-intro__text {
        grid-column-start: 5;
        grid-column-end: 11;
        display: flex;
        flex-direction: column;
        transform: translateX(100);
    }

    .bs-intro__image {
        grid-column-start: 1;
        grid-column-end: 4;
        transform: translateX(100);
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-intro__text {
            grid-column-start: 7;
            grid-column-end: 13;
        }

        .bs-intro__image {
            grid-column-start: 1;
            grid-column-end: 6;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {

        .bs-intro__text {
            grid-column-start: 1;
            grid-column-end: 13;
            margin-bottom: ${ props => props.theme.spaceS }px;
        }

        .bs-intro__image {
            grid-column-start: 1;
            grid-column-end: 13;
            order: 2;
            
        }
    }

`