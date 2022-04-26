import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const ClientsStyles = styled(ContentStyles)`

    .bs-clients__title {
        grid-column-start: 2;
        grid-column-end: 12;
        display: flex;
        flex-direction: column;
    }

    .bs-clients__client {
        grid-column: span 3;
        display: flex;
        align-items: center;
        padding: 0 ${ props => props.theme.spaceL }px;
        

        .bs-image {
            height: 30%;
            display: inline-grid;
        }
    }

`