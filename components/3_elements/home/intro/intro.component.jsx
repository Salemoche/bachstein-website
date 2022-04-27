// Base
import React from 'react'
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

// Data
import { defaultStore } from '../../../../state/store';

// Style
import { IntroStyles } from './intro.styles';
import { GridStyles } from '../../../../styles/global-components.styles';

// Components
import ImageComponent from '../../../1_atoms/image/image.component';

// Animation
import { motion, whileInView } from 'framer-motion';

const IntroComponent = ({ image, title, text }) => {

    return (
        // <motion.div
        //     initial={{ opacity: 0.2 }}
        //     whileInView={{ opacity: 1 }}
        //     transition={{
        //         duration: 0.25,
        //         delay: 0.5
        //     }}
        //     onViewportEnter={() => {console.log('enter')}}
        // >
            <IntroStyles className="bs-intro">
                <GridStyles gridColumns={12}>
                    <div className="bs-intro__image">
                        { image && <ImageComponent image={ image } /> }
                    </div>
                    <div className="bs-intro__text">
                        <h2>{ title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                    </div>
                </GridStyles>
            </IntroStyles>
        // </motion.div>
    )
}

export default IntroComponent
