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

    .bs-projects__project {
        grid-column: span 4;
        display: flex;
        align-items: center;   
        position: relative;  
        
        &:last-child {
            display: none;
        }

        .bs-image {
            display: inline-grid;
        }

        .bs-projects__info {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${ props => props.theme.colors.blue[1] };
            color: ${ props => props.theme.fontColorInverted };
            color: white;
            display: flex;
            align-items: center;
            padding: ${ props => props.theme.spaceM }px;
            transition: opacity ${ props => props.theme.transition[2] };
            opacity: 0;
        }

        &:hover {
            .bs-projects__info {
                opacity: 0.9;
                margin-bottom: 0;
            }
        }
    }

    

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-projects__title {
            grid-column-start: 1;
            grid-column-end: 13;
        }

        .bs-projects__project {
            grid-column: span 6;
        
            &:last-child {
                display: inherit;
            }
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointS }px) {

        .bs-projects__project {
            grid-column: span 12;
        }
    }

`