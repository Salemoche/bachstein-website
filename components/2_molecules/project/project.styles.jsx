import styled, { css } from 'styled-components';
import { variant } from 'styled-system'

export const ProjectStyles = styled('a')`

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

        ${ props => {
            if ( props.mode === 'mobile' ) {
                return css`
                opacity: ${ props.isInView ? 0.9 : 0 }
            `
            }
        }};
    }

    &:hover {
        .bs-projects__info {
            opacity: 0.9;
            margin-bottom: 0;
        }
    }


    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        grid-column: span 6;

        &:last-child {
            display: inherit;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointS }px) {
        grid-column: span 12;
    }
`;