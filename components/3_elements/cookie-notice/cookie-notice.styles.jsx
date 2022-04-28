import styled from 'styled-components';
import defaultTheme from '../../../styles/theme'

export const CookieNoticeStyles = styled('div')`
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: ${ props => props.theme.zIndices.cookieNotice };
    background: ${ props => props.theme.backgroundColor };
    padding: ${ props => props.theme.spaceM }px;
    display: flex;
    align-items: center;

    .cookie-notice__message {
        flex: 1;
    }

    .cookie-notice__button {
        margin-left: ${ props => props.theme.spaceS }px;
    }

    @media screen and (max-width: ${ props => props.theme.breakpointM - 1 }px) {

        flex-wrap: wrap;
        padding: ${ props => props.theme.spaceS }px;
        gap: ${ props => props.theme.spaceS }px;

        .cookie-notice__message {
            flex-basis: 100%;
        }

        .cookie-notice__button {
            flex: 1;
            margin: 0;
            
        }
    }
`