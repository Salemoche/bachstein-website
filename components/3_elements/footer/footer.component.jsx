// Base
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { FooterStyles } from './footer.styles';
import { GridStyles } from '../../../styles/global-components.styles';

const FooterComponent = () => {

    const ref = useRef();

    useEffect(() => {
        defaultStore.footerHeight = ref.current.offsetHeight || 0;
    }, [ ref ])

    return (
        <FooterStyles ref={ ref } className="footer">
            <GridStyles gridColumns={12}>
                <div className="bs-footer__info">
                    <p>Agentur für Web Design</p>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        Flurstrasse 93
                        <br />
                        CH-8047 
                        <br /> 
                        Zürich
                    </a>
                    <br />
                    <a href="mailto:mail@bachstein.ch">mail@bachstein.ch</a>
                </div>
                <div className="bs-footer__menu">
                    <ul>
                        <li><Link rel="stylesheet" href="/datenschutz">Datenschutz</Link></li>
                        <li><Link rel="stylesheet" href="/AGB">AGBs</Link></li>
                    </ul>
                </div>
                <div className="bs-footer__map"></div>
            </GridStyles>
            <div className="bs-footer__copyright">
                ©{ new Date().getFullYear() } | bachstein 
            </div>
        </FooterStyles>
    )
}

export default FooterComponent
