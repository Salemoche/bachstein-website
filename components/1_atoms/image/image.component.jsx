import React from 'react'
import Image from 'next/image';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ImageStyles } from './image.styles';

const ImageComponent = ({ image, handleClick = () => { console.log('clicked the image' )}, className = '' }) => {
            
    if ( !image.mediaDetails ) return <></>

    const blurImage = image.mediaDetails.sizes.filter( size => size.name === 'blur')[0];
    const blurImageUrl = blurImage.sourceUrl

    return (
        <ImageStyles className={`bs-image ${className}`} onClick={ handleClick } >
            {/* <Image
                src={image.mediaItemUrl}
                width={image.mediaDetails.width}
                height={image.mediaDetails.height} 
                loading={'lazy'}
                layout={'responsive'} 
                quality={75}
                placeholder={'blur'}
                blurDataURL={blurImageUrl}
            /> */}
        </ImageStyles>
    )
}

export default ImageComponent