
import styled from 'styled-components';

export const ContentStyles = styled('div')`
    display: block;
    margin: 0 auto;
    max-width: 100vw;
    margin-top: ${ props => props.theme.spaceL }px;

    > * {
        width: ${ props => props.theme.contentWidthL }px;
        max-width: 100%;
        margin: 0 auto;
        padding: ${ props => props.theme.spaceM }px;
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {
        > * {
            padding: ${ props => props.theme.spaceS }px;
        }
    }

`

export const GridStyles = styled('div')`
    display: grid;
    grid-template-rows: repeat(${ props => props.gridRows || 1}, 1fr );
    grid-template-columns: repeat(${ props => props.gridColumns || 12}, 1fr);
    grid-gap: ${ props => props.gridGap || 16}px; 
`

export const BlockStyles = styled('div')`
    
    width: 100%;
    padding: 0;
    margin-bottom: ${ props => props.theme.spaceS }px;

    > * {
        width: ${ props => props.theme.contentWidthM }px;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 ${ props => props.theme.spaceM }px;
    }

    @media screen and ( max-width: ${ props => props.theme.breakpointM }px) {
        > * {
            padding: 0 ${ props => props.theme.spaceS }px;
        }
    }
`

export const WPBlockStyles = styled(BlockStyles)`

    h2,
    h3,
    h4 {
        margin-top: ${ props => props.theme.spaceL }px;
    }

    a {
        text-decoration: underline;
    }

    .alignfull {
        padding: 0;
        width: 100%;

        img {
            width: 100%;
        }
    }

    .has-text-align-right {
        text-align: right;
    }

    .has-text-align-left {
        text-align: left;
    }

    .has-text-align-center {
        text-align: center;
    }

    .wp-block-quote {

        cite {

        }
    }

    figure.wp-block-table {
        table {
            border-collapse: collapse;

            tbody {
                tr {
                    th {
                        border: 1px solid black;
                    }

                    td {
                        border: 1px solid black;
                    }
                }
            }   
        }

        figcaption {

        }
    }

    figure.wp-block-audio {

        audio {
            width: ${ props => props.theme.contentWidthS }px;
            max-width: 100%;
            margin: 0 auto;
            display: block;
        }
    }

    figure.wp-block-video,
    figure.wp-block-embed {

        iframe, 
        video {
            margin: 0 auto;
            display: block;
            width: ${ props => props.theme.contentWidthS }px;
            max-width: 100%;
        }
    }

    .wp-block-image,
    &.bs-wp-block-image {
        &.size-large {

        }

        .alignleft, 
        .alignright, 
        .aligncenter {
            width: ${ props => props.theme.contentWidthS }px;
            max-width: 100%;
        } 

        .aligncenter {
            margin: 0 auto;
        } 
        
        .alignleft {
            margin-right: auto;
            margin-left: 0;
        } 
        
        .alignright {
            margin-left: auto;
            margin-right: 0;
        } 
    }

    .wp-block-separator {
        border: none;
        border-top: 1px solid black;
        padding: 0;
        margin: ${ props => props.theme.spaceM }px auto;
        width: ${ props => props.theme.contentWidthS }px;
    }
`

export const WPColumnsStyles = styled(WPBlockStyles)`
    width: 100%;
    padding: 0;

    .wp-columns {
        width: ${ props => props.theme.contentWidthL }px;
        max-width: 100%;
        margin: 0 auto;
        padding: ${ props => props.theme.spaceM }px;
        display: flex;    
    }
`

export const WPColumnStyles = styled('div')`
    flex-basis: ${ props => props.width };
`

export const IconStyles = styled('div')`
    display: block;
    width: ${ props => props.theme.spaceM }px;
    height: ${ props => props.theme.spaceM }px;

    svg {
        width: 100%;
        height: 100%;
    }
`

export const GutenbergPageStyles = styled.div`
    margin-top: ${ props => props.theme.spaceL }px;
`