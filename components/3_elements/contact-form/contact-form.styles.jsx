import styled from 'styled-components'
import defaultTheme from '../../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const ContactFormStyles = styled('div')`
    background: ${ props => props.theme.backgroundColorInverted };
    padding: ${ props => props.theme.spaceL }px;
    border-radius: ${ props => props.theme.borderRadiusL };
    color:  ${ props => props.theme.fontColorInverted };
    width: ${ props => props.theme.contentWidthL - props.theme.spaceM * 2 }px;
    max-width: calc( 100% - ${ props => props.theme.spaceM * 2 }px);
    
    .bs-contact-form-lead {
        margin-bottom: ${ props => props.theme.spaceS }px;
        margin-top: -${ props => props.theme.spaceS }px;
    }

    input[type=text],
    input[type=email],
    textarea {
        border: 1px solid ${ props => props.theme.fontColorInverted };
        border-radius: ${ props => props.theme.borderRadiusM };
        margin-bottom: ${ props => props.theme.spaceXS }px;
        width: 100%;

        ::placeholder {
            color: ${ props => props.theme.fontColorInverted };
        }
    }

    .column-1 {
        grid-column: span 3;
    }

    .column-2 {
        grid-column: span 6;
    }

    .column-3 {
        grid-column: span 3;
    }

    form {
        .bs-main-label {
            width: 100%;
            display: block;
            margin-bottom: ${ props => props.theme.spaceXS }px;
        }

        .bs-form-budget {
            margin-bottom: ${ props => props.theme.spaceXS }px;
        }

        .bs-form-type {
            margin-bottom: ${ props => props.theme.spaceXS }px;
        }

        .bs-form-message {
            margin-bottom: ${ props => props.theme.spaceXS }px;
        }
    }
`