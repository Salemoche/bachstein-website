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

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-projects__title {
            grid-column-start: 1;
            grid-column-end: 13;
        }
    }

`