// Base
import React from 'react'

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

const HeaderComponent = ({ strapline, image }) => {

    // const parsedImage = getWordpressImage( image )?.large?.sourceUrl || '';
    // const parsedImage = getWordpressImage( image );

    return (
        <HeaderStyles className="bs-header">
            {/* <div className="bs-home-header__background" dangerouslySetInnerHTML={{ __html: parsedImage.imageElement } }></div> */}
            <div className="bs-home-header__background">
                { image && <ImageComponent image={ image } size="1536x1536" prioritize={true} /> }
            </div>
            <HeaderStyles className="bs-home-header__content">
                <h1 className="bs-home-header__wordmark">bachstein</h1>
                <div className="bs-home-header__strapline">{ strapline }</div>
            </HeaderStyles>
        </HeaderStyles>
    )
}

export default HeaderComponent
