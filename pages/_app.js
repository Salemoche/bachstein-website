// Base
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

// Data
import { useDeviceDetector } from '../utils/hooks';
import { defaultStore } from '../state/store';

// Styling
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/global.styles.js';

function MyApp({ Component, pageProps }) {
    const route = useRouter().route
    const deviceDetector = useDeviceDetector();

    useEffect(() => {
        defaultStore.deviceDetector = deviceDetector;
    }, [ deviceDetector ])

    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyles/>
            <AnimatePresence 
                exitBeforeEnter={true}
                initial={false}
            >
                <Component {...pageProps} key={route}/>
            </AnimatePresence>
        </ThemeProvider>
        
    )
}

export default MyApp
