import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const IntroStyles = styled(ContentStyles)`

    .bs-intro__text {
        grid-column-start: 5;
        grid-column-end: 11;
        display: flex;
        flex-direction: column;
    }

    .bs-intro__image {
        grid-column-start: 1;
        grid-column-end: 4;
    }

`