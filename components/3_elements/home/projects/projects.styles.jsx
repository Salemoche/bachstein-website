import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const ProjectsStyles = styled(ContentStyles)`

    .bs-projects__title {
        grid-column-start: 2;
        grid-column-end: 12;
        display: flex;
        flex-direction: column;
    }

    .bs-projects__client {
        grid-column: span 4;
        display: flex;
        align-items: center;        

        .bs-image {
            display: inline-grid;
        }
    }

`