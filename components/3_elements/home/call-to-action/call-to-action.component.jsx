// Base
import React from 'react'
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

// Animation
import { motion } from 'framer-motion';
import { animAppearChild } from '../../../../styles/animation';
import { useAppearAnimation } from '../../../../utils/hooks';

const CallToActionComponent = ({ image, title, text, buttonText }) => {

    return (
        <CallToActionStyles className="bs-cta">
            { useAppearAnimation(
                <GridStyles gridColumns={12}>
                    <motion.div variants={ animAppearChild({ direction: 'fromLeft' }) } className="bs-cta__text">
                        <h2>{ title }</h2>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                        <ButtonComponent link="mailto:collab@bachstein.ch" label={buttonText}/>
                    </motion.div>
                    <motion.div variants={ animAppearChild({ direction: 'fromLeft' }) } className="bs-cta__image">
                        { image && <ImageComponent image={ image } /> }
                    </motion.div>
                </GridStyles>
            ) }
        </CallToActionStyles>
    )
}

export default CallToActionComponent
