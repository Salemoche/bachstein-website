// Base
import { useEffect } from 'react';

// Data
import { apolloClient } from '../utils/apolloClient';
import { PAGE_QUERY } from '../utils/queries';
import { defaultStore } from '../state/store';
import { useSnapshot } from 'valtio';

// Components
import LayoutComponent from '../components/layout/layout.component';
import { ContentStyles } from '../styles/global-components.styles';

// Animation
import { motion } from 'framer-motion';
import { useTranslation } from '../utils/hooks';

export default function Home({ translations, mainMenu, footerMenu, baseUrl, siteName }) {

    const { deviceDetector, router } = useSnapshot( defaultStore );
    const content = useTranslation( translations, 'en_US');
    const { title } = content;
    const { strapline } = content.home;


    // Set site state

    useEffect(() => {
        defaultStore.base.siteName = siteName
        defaultStore.current = {
            ...defaultStore.current,
            url: baseUrl,
            title
        }
    }, [])

    useEffect(() => {
        console.log( defaultStore, deviceDetector );
        // console.log( env )
    }, [ content ])

    return (
        <motion.div 
            key="bs-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
        >
            <LayoutComponent 
                mainMenu={ mainMenu }
                baseUrl={ baseUrl }
                siteName={ siteName }
                content={ content }
                // fullHead={ fullHead } // SM-TODO: SEO
            >
                <section>
                    <ContentStyles className="bs-content">
                        <h1>Bachstein</h1>
                        <p>{ strapline }</p>
                    </ContentStyles>
                </section>
            </LayoutComponent>
        </motion.div>
    )
}


export const getStaticProps = async() => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

    const result = await apolloClient.query({
        query: PAGE_QUERY()
    });

    const pages = result.data.pages.nodes;
    const homePage = pages.filter( (page) => (page.isFrontPage === true) );
    const menus = result.data.menus.nodes;
    const mainMenu = menus.filter( (menu) => (menu.slug === 'main-menu') );
    const footerMenu = menus.filter( (menu) => (menu.slug === 'footer-menu') );
    const translations = {
        de: homePage[0]
    }

    homePage[0].translated.forEach(translation => {
        translations[translation.locale?.locale] = translation
    });
    
    return {
        props: {
            translations,
            // content: homePage[0],
            mainMenu: mainMenu[0] || {},
            footerMenu: footerMenu[0] || {},
            baseUrl,
            siteName
        }
    }
}  
