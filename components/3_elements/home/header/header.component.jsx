// Base
import React, { useEffect } from 'react'

// Data
import { defaultStore } from '../../../../state/store';

// Style
import { HeaderStyles } from './header.styles';
import { ContentStyles } from '../../../../styles/global-components.styles';

// Helpers
import { getWordpressImage } from '../../../../utils/helpers';

// Components
import WPImagesComponent from '../../../wp-images/wp-images-component';
import ImageComponent from '../../../1_atoms/image/image.component';

// Animation
import { motion, useViewportScroll } from 'framer-motion';
import { useState } from 'react';

const HeaderComponent = ({ strapline, image }) => {

    // const parsedImage = getWordpressImage( image )?.large?.sourceUrl || '';
    // const parsedImage = getWordpressImage( image );export const CircleIndicator = () => {
    const viewPortScroll = useViewportScroll()
    const [scrollYProgress, setScrollYProgress] = useState(0)

    useEffect(() => {
        viewPortScroll?.scrollYProgress.onChange(e => {
            setScrollYProgress(e)
        });
    }, [ scrollYProgress ])
    
    return (
        <HeaderStyles className="bs-header">
            {/* <div className="bs-home-header__background" dangerouslySetInnerHTML={{ __html: parsedImage.imageElement } }></div> */}
            <motion.div 
                style={{
                    height: '100%',
                    width: '100%',
                }}
                animate={{
                    scale: scrollYProgress * 1 + 1, 
                    rotate: scrollYProgress * 5, 
                    transition: {
                        // type: 'spring',
                        // bounce: '0'
                        // duration: 20,
                        // repeat: Infinity,
                        // repeatType: "mirror"
                    },
                }} 
                className="bs-home-header__background">
                { image && <ImageComponent image={ image } size="1536x1536" prioritize={true} /> }
            </motion.div>
            <HeaderStyles className="bs-home-header__content">
                <h1 className="bs-home-header__wordmark">bachstein</h1>
                <div className="bs-home-header__strapline">{ strapline }</div>
            </HeaderStyles>
        </HeaderStyles>
    )
}

export default HeaderComponent
