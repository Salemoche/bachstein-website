import styled from 'styled-components'
import defaultTheme from '../../../../styles/theme'
import { ContentStyles } from '../../../../styles/global-components.styles';

export const ClientsStyles = styled(ContentStyles)`

    .bs-clients__title {
        grid-column-start: 2;
        grid-column-end: 12;
        display: flex;
        flex-direction: column;
        margin-bottom: ${ props => props.theme.spaceL }px;
    }

    .bs-clients__client {
        grid-column: span 3;
        display: flex;
        align-items: center;
        padding: 0 ${ props => props.theme.spaceL }px;
        transition: transform ${ props => props.theme.transition[1] };


        &:last-of-type {
            display: none;
        }

        .bs-image {
            height: 30%;
            width: 100%;
            display: inline-grid;
            display: flex;
            align-items: center;

            img {
                height: 100%;
                width: 100%;
                margin: 0 auto;
            }
        }

        &:hover {
            color: ${ props => props.theme.colors.blue[1] };
        }
    }

    

    @media screen and ( max-width: ${ props => props.theme.breakpointL }px) {

        .bs-clients__title {
            grid-column-start: 1;
            grid-column-end: 13;
        }

        .bs-clients__client {
            grid-column: span 3;
            padding: 0 ${ props => props.theme.spaceS }px;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {

        .bs-clients__client {
            grid-column: span 4;

            &:last-of-type {
                display: inherit;
            }
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointS }px) {

        .bs-clients__client {
            grid-column: span 6;
            
            &:last-of-type {
                display: none;
            }

            .bs-image {
                height: 100%;
                margin: 0 auto;
                
                img {
                    height: 50%;
                }
            }
        }
    }

`