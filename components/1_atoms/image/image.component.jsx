import React from 'react'
import Image from 'next/image';

// Style
import { ImageStyles } from './image.styles';

const ImageComponent = ({ image, size:sizeName = 'large', handleClick = () => { console.log('clicked the image' )}, className = '' }) => {
            
    if ( !image.mediaDetails ) return <></>

    const blurImage = image.mediaDetails.sizes.filter( size => size.name === 'blur')[0];
    const blurImageUrl = blurImage.sourceUrl

    const imageUrl = image.mediaDetails.sizes.filter( size => size.name == sizeName)[0]?.sourceUrl || image.mediaItemUrl;
    const imageWidth = image.mediaDetails.sizes.filter( size => size.name == sizeName)[0]?.width || image.mediaDetails.width;
    const imageHeight = image.mediaDetails.sizes.filter( size => size.name == sizeName)[0]?.height || image.mediaDetails.height;

    return (
        <ImageStyles className={`bs-image ${className}`} onClick={ handleClick } >
            <Image
                src={imageUrl}
                width={imageWidth}
                height={imageHeight} 
                loading={'lazy'}
                layout={'responsive'} 
                quality={75}
                placeholder={'blur'}
                blurDataURL={blurImageUrl}
            />
        </ImageStyles>
    )
}

export default ImageComponent