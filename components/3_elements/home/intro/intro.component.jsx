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

const IntroComponent = ({ image, title, text }) => {

    const animIntro = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.25,
                delay: 0.5,
                delayChildren: 1.5
            }
        }
    }

    const animImage = {
        show: {
            transform: 'translateX(-200px)',
            opacity: 1,
            transition: {
                delay: 0.5
            }
        }
    }

    const animText = {
        show: {
            transform: 'translateX(-200px)',
            opacity: 1,
            transition: {
                delay: 1.9
            }
        }
    }

    return (
        <IntroStyles className="bs-intro">
            <motion.div
                variants={ animIntro }
                style={{opacity: 0.2}}
                whileInView="show"
                // whileHover="show"
                onViewportEnter={() => {console.log('enter')}}
            >
                <GridStyles gridColumns={12}>
                    <div 
                        className="bs-intro__image" 
                        style={{ 
                            transform: 'translateX(0px)',
                            opacity: 1
                        }}
                        variants={ animImage }
                    >
                        { image && <ImageComponent image={ image } /> }
                    </div>
                    <div 
                        className="bs-intro__text" 
                        style={{ 
                            transform: 'translateX(0px)',
                            opacity: 1
                        }}
                        variants={ animText }
                    >
                        <h2>{ title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                    </div>
                </GridStyles>
            </motion.div>
        </IntroStyles>
    )
}

export default IntroComponent
