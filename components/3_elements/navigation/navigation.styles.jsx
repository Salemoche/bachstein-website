import styled, { css } from 'styled-components'
import { IconStyles } from '../../../styles/global-components.styles';
import defaultTheme from '../../../styles/theme'

export const NavigationStyles = styled('div')`

    position: fixed;
    top: 0;
    right: 0;
    z-index: ${ props => props.theme.zIndices.navigation };
    user-select: none;

    .bs-main-menu {
        display: flex;
        flex-direction: column;
        margin: ${ props => props.theme.spaceM }px;
        margin-top: 5rem;
    }

    .bs-menu-item {
        position: relative;
        text-decoration: none;
        margin-bottom: ${ props => props.theme.spaceXS }px;
        padding: ${ props => props.theme.spaceXXS }px ${ props => props.theme.spaceS }px;
        padding-bottom: ${ props => props.theme.spaceXS }px;
        font-size: ${ props => props.theme.fontSizeL };
        font-family: ${ props => props.theme.fontFamilySpecial };
        text-align: right;
        background: ${ props => props.theme.colors.gray[0] }dd;
        border-radius: ${ props => props.theme.borderRadiusL };

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding-right: 42px;
            margin-top: 8px;

            &:hover {
                color: white;
                background: ${ props => props.theme.colors.blue[1] };
            }
        }
        
        &:hover {
            color: white;
            background: ${ props => props.theme.colors.blue[1] };
        }

        &.active {
            color: white;
            background: ${ props => props.theme.colors.blue[1] };
        }
    }

    /* ${ ({ device, menuOpen }) => {
        if ( device.mode === 'tablet' || device.mode === 'mobile' ) {
            return css`

                .bs-main-menu {
                    width: 100vw;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    position: fixed;
                    background: white;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    pointer-events: ${ menuOpen ? 'all' : 'none' };
                }
            `
        }
    }}; */
    
`

export const MenuIconStyles = styled(IconStyles)`
    display: inline-block;
    position: absolute;
    right: ${ props => props.theme.spaceS }px;
    top: 0;
    transform: translateY(${ props => props.y }px);
    margin-left: ${ props => props.theme.spaceS }px;
    
`

export const HamburgerIconStyles = styled(IconStyles)`
    display: flex;
    position: absolute;
    right: ${ props => props.theme.spaceM }px;
    top: ${ props => props.theme.spaceM }px;
    cursor: pointer;
`
