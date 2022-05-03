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
import { motion } from 'framer-motion';
import { useAppearParent } from '../../../../utils/hooks';
import { appearChild } from '../../../../utils/helpers';

const IntroComponent = ({ image, title, text }) => {

    return (
        <IntroStyles className="bs-intro">
            { useAppearParent(
                {},
                <GridStyles gridColumns={12}>
                    <motion.div 
                        className="bs-intro__image" 
                        style={{ 
                            transform: 'translateX(0px)',
                            opacity: 1
                        }}
                        variants={ appearChild() }
                    >
                        { image && <ImageComponent image={ image } /> }
                    </motion.div>
                    <motion.div 
                        className="bs-intro__text" 
                        variants={ appearChild() }
                    >
                        <h2>{ title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                    </motion.div>
                </GridStyles>
            )}
        </IntroStyles>
    )
}

export default IntroComponent
