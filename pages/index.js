// Base

// Data
import { apolloClient } from '../utils/apolloClient';
import { PAGE_QUERY } from '../utils/queries';
import { defaultStore } from '../state/store';
import { useSnapshot } from 'valtio';

// Components
import LayoutComponent from '../components/layout/layout.component';
import { useEffect } from 'react';

export default function Home({ content, mainMenu, footerMenu }) {

    const { deviceDetector } = useSnapshot( defaultStore );
    const { title } = content

    useEffect(() => {
        console.log( content )
    }, [])

    return (
        <LayoutComponent>
            <h1>Hello, world, this is the { title } page</h1>
            <p> The device size is { deviceDetector.size } </p>
        </LayoutComponent>
    )
}


export const getStaticProps = async() => {

    const result = await apolloClient.query({
        query: PAGE_QUERY()
    });

    const pages = result.data.pages.nodes;
    const homePage = pages.filter( (page) => (page.isFrontPage === true) );
    const menus = result.data.menus.nodes;
    const mainMenu = menus.filter( (menu) => (menu.slug === 'main-menu') );
    const footerMenu = menus.filter( (menu) => (menu.slug === 'footer-menu') );
    
    return {
        props: {
            content: homePage[0],
            mainMenu,
            footerMenu,
        }
    }
}  
