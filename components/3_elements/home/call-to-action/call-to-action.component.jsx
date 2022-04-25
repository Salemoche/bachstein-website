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

const CallToActionComponent = ({ image, title, text }) => {

    return (
        <CallToActionStyles className="bs-cta">
            <GridStyles gridColumns={12}>
                <div className="bs-cta__text">
                    <h2>{ title }</h2>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml( text ) }}></div>
                </div>
                <div className="bs-cta__image">
                    { image && <ImageComponent image={ image } /> }
                </div>
            </GridStyles>
        </CallToActionStyles>
    )
}

export default CallToActionComponent
