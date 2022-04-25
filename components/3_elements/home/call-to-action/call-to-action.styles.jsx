import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const CallToActionStyles = styled(ContentStyles)`

    .bs-cta__text {
        grid-column-start: 2;
        grid-column-end: 7;
        display: flex;
        flex-direction: column;
    }

    .bs-cta__image {
        grid-column-start: 7;
        grid-column-end: 13;
    }

`