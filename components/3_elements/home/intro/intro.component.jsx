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

const IntroComponent = ({ image, title, text }) => {

    return (
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
    )
}

export default IntroComponent
