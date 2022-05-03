// Base
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

// Data
import { defaultStore } from '../../../../state/store';

// Style
import { CallToActionStyles } from './call-to-action.styles';
import { GridStyles } from '../../../../styles/global-components.styles';

// Components
import ImageComponent from '../../../1_atoms/image/image.component';
import ButtonComponent from '../../../1_atoms/button/button.component';
import CTAIcon from '../../../../public/img/icons/contact.svg'
// import CTAVideo from '../../../../public/video/waves-4.mp4'

// Animation
import { motion } from 'framer-motion';
import { useAppearParent, useScrolledInView } from '../../../../utils/hooks';
import { useViewportScroll } from 'framer-motion';
import { appearChild } from '../../../../utils/helpers';


const CallToActionComponent = ({ image, title, text, buttonText }) => {

    
    /**========================
    *	Video Scroll Update
    *========================*/
    
    // const videoRef = useRef(null)    
    // const scrollElementRef = useRef(null)

    // const viewPortScroll = useViewportScroll();
    // // const [scroll, setScroll] = useState({})
    // const scroll = useRef()
    // const scrollMargin = 200;
    // let scrolledInViewDist;
    // let scrolledInViewProgress;

    // const scrollFunction = (scrollY) => {

    //     if ( !scrollElementRef.current || !videoRef.current ) return 
        
    //     scrolledInViewDist = -(scrollElementRef.current.offsetTop - (scrollY + window.innerHeight)) - scrollMargin;
    //     const maxScrollDist = window.innerHeight - scrollMargin * 2;
    //     scrolledInViewProgress = scrolledInViewDist / maxScrollDist;
    //     const { duration } = videoRef.current;

    //     if ( scrolledInViewDist > 0 && scrollY + scrollMargin < scrollElementRef.current.offsetTop) {
    //         scroll.current = {
    //             scrolledInView: scrolledInViewDist.toFixed(2),
    //             scrolledInViewProgress: scrolledInViewProgress.toFixed(2),
    //         }

    //         videoRef.current.currentTime = (duration * scrolledInViewProgress).toFixed(1) || 0;
    //     }
    // }

    // useEffect(() => {
    //     viewPortScroll?.scrollY.onChange(e => scrollFunction(e));
    // }, [])
    

    return (
        <CallToActionStyles className="bs-cta">
            { useAppearParent(
                {},
                <GridStyles gridColumns={12}>
                    <motion.div variants={ appearChild({ direction: 'fromLeft' }) } className="bs-cta__text">
                        <h2>{ title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                        <ButtonComponent link="mailto:collab@bachstein.ch" label={buttonText} icon={CTAIcon}/>
                    </motion.div>
                    <motion.div 
                        // ref={ scrollElementRef }
                        variants={ appearChild({ direction: 'fromLeft' }) } 
                        className="bs-cta__medium"
                        // whileInView={(e) => console.log(e)}
                    >
                        {/* <video ref={ videoRef } className="bs-cta-video" src="/video/waves-4.mp4"></video> */}
                        { image && <ImageComponent image={ image } /> }
                    </motion.div>
                </GridStyles>
            ) }
        </CallToActionStyles>
    )
}

export default CallToActionComponent
