// Base
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

// Data
import { useSnapshot } from 'valtio';
import { useDeviceDetector } from '../utils/hooks';
import { defaultStore } from '../state/store';
import { useCookies } from 'react-cookie'

// Styling
import { ThemeProvider } from 'styled-components'
import defaultTheme, { baseTheme, invertedTheme } from '../styles/theme';
import GlobalStyles from '../styles/global.styles.js';
import LoadingComponent from '../components/3_elements/loading/loading.component';

//Animation
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import Scrollbar, { ScrollbarOptions } from 'smooth-scrollbar';
import CookieNotice from '../components/3_elements/cookie-notice/cookie-notice.component';
import DebugControls from '../components/3_elements/debug/debug-controls.component';


// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const state = useSnapshot(defaultStore);
    const router = useRouter()
    const deviceDetector = useDeviceDetector();
    const [showLoading, setShowLoading] = useState(true)
    const viewPortScroll = useViewportScroll()
    const { scrollY, scrollYProgress } = viewPortScroll;
    const [cookies, setCookie, removeCookie] = useCookies(['bs-agrees-to-cookies']);
    const [showCookieNotice, setShowCookieNotice] = useState(false)
    const [theme, setTheme] = useState( defaultStore.theme.negative ? invertedTheme : baseTheme )
    
    /**========================
    *	Cookies
    *========================*/

    useEffect(() => {
        if ( !cookies['bs-agrees-to-cookies'] ) {
            setShowCookieNotice(true);
        } else {

            if ( cookies['bs-agrees-to-cookies'] == 'true' ) {
                defaultStore.cookies.allowed = true;
            } else {
                defaultStore.cookies.allowed = false;
            }

            setShowCookieNotice(false);
        }

        // removeCookie('bs-agrees-to-cookies');

    }, [cookies])
    

    const handleCookieNotice = ( accepted ) => {
        // setCookie('bs-agrees-to-cookies', accepted ? 'true' : 'false', { maxAge: 10 });
        setCookie('bs-agrees-to-cookies', accepted ? 'true' : 'false', { maxAge: 60 * 60 * 24 /*hours*/ });
    }

    
    /**========================
    *	Device
    *========================*/

    useEffect(() => {
        defaultStore.deviceDetector = deviceDetector;
    }, [ deviceDetector ])

    
    /**========================
    *	Router
    *========================*/

    useEffect(() => {
        defaultStore.router = router;
        defaultStore.current.route = router.route;
    }, [ router ])

    
    /**========================
    *	Styling
    *========================*/   
   
    useEffect(() => {
      console.log(defaultStore.theme.negative)
    
    }, [defaultStore.theme])
    

    
    /**========================
    *	Debug
    *========================*/

    const handleDebugClick = () => {
        setTheme( prev => prev == baseTheme ? invertedTheme : baseTheme );
    }

    // State
    useEffect(() => {
        console.log('=================== State change ===================')
        console.log(defaultStore)
    }, [ defaultStore ])

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 500);
    })


    return (
        <ThemeProvider theme={ theme }>
        {/* <ThemeProvider theme={{ mode: 'dark' }}> */}
            <GlobalStyles/>
            {/* <AnimatePresence>
                { showLoading &&
                <motion.div
                    key="bs-loading"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .1 }}
                >
                    <LoadingComponent/>
                </motion.div>
                }
            </AnimatePresence> */}
            {/* <AnimatePresence 
                exitBeforeEnter={true}
                initial={false}
            > */}
                <Component {...pageProps} key={router.route}/>
            {/* </AnimatePresence> */}
            <AnimatePresence>
            { showCookieNotice && 
                <motion.div
                    key="bs-loading"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .3 }}
                >
                    <CookieNotice key={ 'cookie-notice' } handleClick={ handleCookieNotice } />
                </motion.div>
            }
            </AnimatePresence>
            { defaultStore.debug &&
                <motion.div
                    drag
                    dragMomentum={ false }
                    style={{
                        right: 0,
                        top: 0,
                        position: 'fixed',
                        top: '100px',
                        right: '100px',
                        zIndex: 1000,
                    }}
                >
                    <DebugControls handleClick={ handleDebugClick }/>
                </motion.div>
            }
        </ThemeProvider>
        
    )
}

export default MyApp
