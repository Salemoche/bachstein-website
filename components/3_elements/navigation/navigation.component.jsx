// Base
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../../state/store';
import { useSnapshot } from 'valtio';

// Components
import { NavigationStyles, MenuIconStyles, HamburgerIconStyles } from './navigation.styles';
import { IconStyles } from '../../../styles/global-components.styles';

// Misc
import HamburgerIcon from '../../../public/img/icons/hamburger.svg';
import CrossIcon from '../../../public/img/icons/cross.svg';
import AboutIcon from '../../../public/img/icons/about.svg';
import HomeIcon from '../../../public/img/icons/home.svg';
import GlobeIcon from '../../../public/img/icons/globe.svg';
import ColorIcon from '../../../public/img/icons/color.svg';

// Animation
import { motion } from 'framer-motion';
import router from 'next/router';
import { useRouter } from 'next/router';

const NavigationComponent = ({ mainMenu }) => {

    const ref = useRef();
    const menuItems = mainMenu?.menuItems?.nodes;
    const { deviceDetector, current } = useSnapshot( defaultStore );
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const pScrollY = useRef(null);
    const router = useRouter()

    useEffect(() => {
        defaultStore.headerHeight = ref.current.offsetHeight || 0;
    }, [ ref ])

    useEffect( () => {
        
        if ( deviceDetector.mode == 'mobile' || deviceDetector.mode == 'tablet') return setShowMenu(true)

        if ( pScrollY.current > current.scrollY || pScrollY.current == null || pScrollY.current == 0 ) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

        pScrollY.current = current.scrollY

    }, [ current.scrollY, deviceDetector ])

    const changeLanguage = () => {
        let currentLanguage;

        if ( defaultStore?.base?.lang?.includes('de') ) {
            currentLanguage = 'de';
        } else if ( defaultStore?.base?.lang?.includes('en') ) {
            currentLanguage = 'en';
        } else if ( defaultStore?.router?.locale?.includes('en') ) {
            currentLanguage = 'en';
        } else {
            currentLanguage = 'de';
        }

        console.log(currentLanguage)

        // defaultStore.base.
    }

    const changeColorMode = () => {
        defaultStore.theme.negative = !defaultStore.theme.negative
        console.log(defaultStore.theme)
    }

    return (
        <NavigationStyles ref={ ref } className="bs-navigation" device={ deviceDetector } menuOpen={ menuOpen }>
            <motion.nav
                className="bs-menu bs-main-menu"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity:  menuOpen ? 1 : 0,
                    y: showMenu ? '0%' : '-100%'
                }}
                transition={{ duration: .1 }}
            >
                {/* { menuItems.map( menuItem => <Link key={ menuItem.path || '/' } href={ menuItem.path || '/' }><a className={`bs-menu-item${menuItem.path === defaultStore?.router?.pathname ? ' active' : ''}`}>{ menuItem.label }</a></Link>) } */}
                <div className={`bs-menu-item${'/' == router.pathname ? ' active' : ''}`}>
                    <Link href="/" scroll={false}>
                        Home
                    </Link>
                    <MenuIconStyles y="7" dangerouslySetInnerHTML={{ __html: HomeIcon }}/>
                </div> 
                <div className={`bs-menu-item${'/agb' == router.pathname ? ' active' : ''}`}>
                    <Link href="/agb" scroll={false}>
                        AGB
                    </Link>
                    <MenuIconStyles y="7" dangerouslySetInnerHTML={{ __html: AboutIcon }}/>
                </div> 
                {/* <a className="bs-menu-item" onClick={changeColorMode}>
                    { defaultStore.theme.negative ? 'light mode' : 'dark mode' }
                    <MenuIconStyles y="7" dangerouslySetInnerHTML={{ __html: ColorIcon }}/>
                </a> */}
                {/* <a className="bs-menu-item" onClick={changeLanguage}>
                    { defaultStore.router.locale == 'de' ? 'english' : 'deutsch' }
                    <MenuIconStyles y="7" dangerouslySetInnerHTML={{ __html: GlobeIcon }}/>
                </a> */}
            </motion.nav>
            <HamburgerIconStyles onClick={() => {setMenuOpen( prev => !prev )} } dangerouslySetInnerHTML={{ __html: menuOpen ? CrossIcon : HamburgerIcon }} />
        </NavigationStyles>
    )
}

export default NavigationComponent
