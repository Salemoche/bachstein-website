const defaultTheme = {
    breakpoints: [ 320, 414, 960, 768, 1024, 1440, 1800 ],
    space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
    fontSizes: [
        '0.875rem', //14px / XS
        '1rem', //16px / S
        '1.25rem', //20px / L
        '1.5rem', // 24px / XL
        '2.25rem', // 32px / XXL
        '3rem', // 48px / XXXL
        '9rem' // 144px / Wordmark
    ],
    fontFamilies: [ 'Pangram', 'Millik' ],
    lineHeights: [ 0.85, 1, 1.2, 1.5, 2 ],
    contentWidths: [ 600, 768, 1400 ],
    colors: { 
        black: [
            '#13161C'
        ],
        gray: [
            '#333333'
        ],
        white: [
            '#fff'
        ],
        blue: [
            '#00ddff',
            '#4e29ff',
            '#18008a'
        ]
    },
    transition: [ '.1s', '.3s', '.6s', '1s'],
    zIndices: {
        debugControls: 400,
        loading: 300,
        cookieNotice: 275,
        modal: 250, 
        navigation: 200,
        infoButton: 100,
    },
    borderRadii: [ '2px', '4px', '8px', '16px', '32px', '50%' ],
}

defaultTheme.spaceXXS = defaultTheme.space[1];
defaultTheme.spaceXS = defaultTheme.space[2];
defaultTheme.spaceS = defaultTheme.space[3];
defaultTheme.spaceM = defaultTheme.space[4];
defaultTheme.spaceL = defaultTheme.space[5];
defaultTheme.spaceXL = defaultTheme.space[6];
defaultTheme.fontSizeXS = defaultTheme.fontSizes[0];
defaultTheme.fontSizeS = defaultTheme.fontSizes[1];
defaultTheme.fontSizeM = defaultTheme.fontSizes[2];
defaultTheme.fontSizeL = defaultTheme.fontSizes[3];
defaultTheme.fontSizeXL = defaultTheme.fontSizes[4];
defaultTheme.fontSizeXXL = defaultTheme.fontSizes[5];
defaultTheme.fontSizeWordmark = defaultTheme.fontSizes[6];
defaultTheme.fontFamilyDefault = defaultTheme.fontFamilies[0];
defaultTheme.fontFamilySpecial = defaultTheme.fontFamilies[1];
defaultTheme.breakpointXXL = defaultTheme.breakpoints[6]
defaultTheme.breakpointXL = defaultTheme.breakpoints[5]
defaultTheme.breakpointL = defaultTheme.breakpoints[4]
defaultTheme.breakpointML = defaultTheme.breakpoints[3]
defaultTheme.breakpointM = defaultTheme.breakpoints[2]
defaultTheme.breakpointS = defaultTheme.breakpoints[1]
defaultTheme.breakpointXS = defaultTheme.breakpoints[0]
defaultTheme.contentWidthL = defaultTheme.contentWidths[2]
defaultTheme.contentWidthM = defaultTheme.contentWidths[1]
defaultTheme.contentWidthS = defaultTheme.contentWidths[0]
defaultTheme.borderRadiusXS = defaultTheme.borderRadii[0];
defaultTheme.borderRadiusS = defaultTheme.borderRadii[1];
defaultTheme.borderRadiusM = defaultTheme.borderRadii[2];
defaultTheme.borderRadiusL = defaultTheme.borderRadii[3];
defaultTheme.borderRadiusXL = defaultTheme.borderRadii[4];
defaultTheme.borderRadius50 = defaultTheme.borderRadii[5];

export const baseTheme = {
    ...defaultTheme,
    fontColor: defaultTheme.colors.black[0],
    fontColorInverted: defaultTheme.colors.white[0],
    linkColor: defaultTheme.colors.blue[1],
    backgroundColor: defaultTheme.colors.white[0],
    backgroundColorInverted: defaultTheme.colors.black[0],
    selectionBackground: defaultTheme.colors.black[0],
    selectionColor: defaultTheme.colors.white[0]
}

export const invertedTheme = {
    ...defaultTheme,
    fontColor: defaultTheme.colors.white[0],
    fontColorInverted: defaultTheme.colors.black[0],
    linkColor: defaultTheme.colors.blue[1],
    highlightColor: defaultTheme.colors.blue[1],
    backgroundColor: defaultTheme.colors.black[0],
    backgroundColorInverted: defaultTheme.colors.white[0],
    selectionBackground: defaultTheme.colors.white[0],
    selectionColor: defaultTheme.colors.black[0]
}

export default defaultTheme