// Base
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { FooterStyles } from './footer.styles';
import { GridStyles } from '../../../styles/global-components.styles';

// Components
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ImageComponent from '../../1_atoms/image/image.component';

const FooterComponent = ( image ) => {

    const footerRef = useRef(null);
    const mapRef = useRef(null);
    const [map, setMap] = React.useState();

    useEffect(() => {
        defaultStore.footerHeight = footerRef.current.offsetHeight || 0;
    }, [ footerRef ])

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {}));
        }
    }, [mapRef, map]);

    return (
        <FooterStyles ref={ footerRef } className="footer">
            { image.image && <div className="bs-footer-background">
                <ImageComponent image={ image.image }/>
            </div>}
            <GridStyles className="bs-footer__container" gridColumns={12}>
                <div className="bs-footer__info">
                    <div className="bs-footer__info__wordmark wordmark">bachstein</div> 
                    <p>Agentur für Web Design</p>
                    <a href="https://goo.gl/maps/8SM9VcyMTPKRXpdWA" target="_blank" rel="noopener noreferrer">
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
                        <li><Link rel="stylesheet" href="/impressum">Impressum</Link></li>
                        <li><Link rel="stylesheet" href="/AGB">AGBs</Link></li>
                    </ul>
                </div>
                <div className="bs-footer__map">
                    <Wrapper apiKey={"AIzaSyAqmpiwD43_vFSrffmmG5SNnnp-3mCpycI"}>
                        <div ref={mapRef}></div>
                    </Wrapper>
                </div>
            </GridStyles>
            <div className="bs-footer__copyright">
                ©{ new Date().getFullYear() } | <span className="bs-footer__copyright__wordmark wordmark">bachstein</span> 
            </div>
        </FooterStyles>
    )
}

export default FooterComponent
