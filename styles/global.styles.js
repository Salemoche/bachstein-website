import { createGlobalStyle } from "styled-components";

// Fonts
// import BonVoyageRegular from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Regular.otf'
// import BonVoyageThin from '../assets/fonts/Bon_Voyage/MADE_Bon_Voyage_Thin.otf'

const GlobalStyles = createGlobalStyle`

@font-face {
font-family: 'Pangram';
font-style: normal;
font-weight: 400;
${'' /* src: url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot');  */}
src: local(''),
    url('/fonts/pangram/Pangram-Regular.otf') format('opentype'),
    font-display: swap;
}

@font-face {
font-family: 'Millik';
font-style: normal;
font-weight: 400;
${'' /* src: url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot');  */}
src: local(''),
    url('/fonts/millik/Millik.otf') format('opentype'),
    url('/fonts/millik/Millik.ttf') format('truetype'),
    font-display: swap;
}

${'' /* 
@font-face {
font-family: 'Lato';
font-style: normal;
font-weight: 400;
src: url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot'); 
src: local(''),
    url('/fonts/lato-v20-latin/lato-v20-latin-regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/lato-v20-latin/lato-v20-latin-regular.woff2') format('woff2'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-regular.woff') format('woff'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-regular.ttf') format('truetype'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-regular.svg#Lato') format('svg'); 
    font-display: swap;
}

@font-face {
font-family: 'Lato';
font-style: italic;
font-weight: 400;
src: url('/fonts/lato-v20-latin/lato-v20-latin-italic.eot'); 
src: local(''),
    url('/fonts/lato-v20-latin/lato-v20-latin-italic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/lato-v20-latin/lato-v20-latin-italic.woff2') format('woff2'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-italic.woff') format('woff'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-italic.ttf') format('truetype'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-italic.svg#Lato') format('svg'); 
    font-display: swap;
}

@font-face {
font-family: 'Lato';
font-style: normal;
font-weight: 700;
src: url('/fonts/lato-v20-latin/lato-v20-latin-700.eot'); 
src: local(''),
    url('/fonts/lato-v20-latin/lato-v20-latin-700.eot?#iefix') format('embedded-opentype'),
    url('/fonts/lato-v20-latin/lato-v20-latin-700.woff2') format('woff2'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-700.woff') format('woff'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-700.ttf') format('truetype'), 
    url('/fonts/lato-v20-latin/lato-v20-latin-700.svg#Lato') format('svg'); 
    font-display: swap;
} */}
    
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100vw;
        font-size: ${ props => props.theme.fontSizeS };
        font-family: ${ props => props.theme.fontFamilies[0] };
        color: ${ props => props.theme.fontColor };
    }

    main {
        width: 100%;
    }

    html {
        overflow: hidden;
    }

    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
        height: 100vh;
        background-color: ${ props => props.theme.backgroundColor }
    }

    * {
        box-sizing: border-box;
        font-display: block;
    }

    h1,
    h2, 
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-family: ${ props => props.theme.fontFamilies[1] };
    }

    h1 {
        font-size: ${ props => props.theme.fontSizeXXL };
        margin-bottom: ${ props => props.theme.spaceS }px;
    }

    h2 {
        font-size: ${ props => props.theme.fontSizeXXL };
        margin-bottom: ${ props => props.theme.spaceS }px;
    }

    h3 {
        font-size: ${ props => props.theme.fontSizeXL };
        margin-bottom: ${ props => props.theme.spaceXS }px;
    }

    h4 {
        font-size: ${ props => props.theme.fontSizeL };
        margin-bottom: ${ props => props.theme.spaceXS }px;
    }

    h5 {
        font-size: ${ props => props.theme.fontSizeM };
        margin-bottom: ${ props => props.theme.spaceXXS }px;
    }

    h6 {
        font-size: ${ props => props.theme.fontSizeS };
    }

    p {
        margin: 0;
        margin-bottom: ${ props => props.theme.spaceS }px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    a {
        color: ${ props => props.theme.linkColor };
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0;
    }

    figure {
        margin: 0;
    }
    
    img {
        height: auto;
        max-width: 100%;
    }

    button,
    input[type=submit],
    .button,
    .wp-block-file__button {
        cursor: pointer;
        background: black;
        color: white;
        border-radius: ${ props => props.theme.borderRadiusXS };
        padding: ${ props => props.theme.spaceS }px;
        text-decoration: none;
    }

    ::selection {
        background: ${ props => props.theme.selectionBackground };
        color: ${ props => props.theme.selectionColor };
    }
    
    /**========================
    *	Accessibility
    *========================*/
    *:focus-visible {
        outline: 2px solid black;
        outline-offset: 3px;
    }
    
    /**========================
    *	Typography
    *========================*/
    

`
export default GlobalStyles;
