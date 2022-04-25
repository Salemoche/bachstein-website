import { useEffect, useState, useRef, useMemo } from 'react';
import DeviceDetector from "device-detector-js";
import defaultTheme from '../styles/theme';
import { getWordpressImage } from './helpers';
import { defaultStore } from '../state/store';

// Components
import LightboxComponent from '../components/3_elements/lightbox/lightbox.component';

export const useDeviceDetector = () => {

    const [returnDevice, setReturnDevice] = useState({})

    const setDevice = (e = null) => {
        const deviceDetector = new DeviceDetector();
        const userAgent = window.navigator.userAgent;
        const device = deviceDetector.parse(userAgent);

        const width = window.innerWidth;
        const height = window.innerHeight;

        let size;
        let mode;

        switch (true) {
            case width > defaultTheme.breakpointXXL:
                size = 'oversize'
                mode = 'desktop'
                break;
            case width > defaultTheme.breakpointXL:
                size = 'extra-extra-large'
                mode = 'desktop'
                break;
            case width > defaultTheme.breakpointL:
                size = 'extra-large'
                mode = 'desktop'
                break;
            case width > defaultTheme.breakpointM:
                size = 'large'
                mode = 'desktop'
                break;
            case width > defaultTheme.breakpointS:
                size = 'medium'
                mode = 'tablet'
                break;
            case width > defaultTheme.breakpointXS:
                size = 'small'
                mode = 'mobile'
                break;
            case width < defaultTheme.breakpointXS:
                size = 'extra-small'
                mode = 'mobile'
                break;
            default:
                break;
        }

        setReturnDevice({
            device: device?.device,
            size,
            mode,
            type: device?.device?.type,
            browser: device?.client?.name,
            width,
            height
        })
    }

    useEffect(() => {

        window?.addEventListener( 'resize', setDevice)

        setDevice();

        return () => {
            window?.removeEventListener( 'resize', setDevice)
        }
    }, [])


    return returnDevice
}

// export const useScroll = (ref, callback ) => {

//     const scrollData = useRef({
//         fromTop: -1,
//         fromBottom: -1,
//     })

//     const scrollFunctions = () => {
//         callback({
//                 fromTop: ref?.current?.scrollTop,
//                 fromBottom: ref?.current?.scrollHeight - ref?.current?.scrollTop - window.innerHeight,
//             });
//     }

//     // SM-Todo

//     useEffect(() => {
//         if ( !ref ) return
//         if ( ref.current ) {
//             ref.current.addEventListener('scroll', scrollFunctions);
//         }

//         return () => {
//             if ( ref.current ) {
//                 ref.current.removeEventListener('scroll', scrollFunctions);
//             }
//         }
// 	}, [ref, scrollData])

//     return scrollData
// }

// export const useMousePositionOnScreen = ( callback ) => {
//     let mousePosition = useRef({});

//     useEffect(() => {

//         document?.querySelector('html')?.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             document?.querySelector('html')?.removeEventListener('mousemove', handleMouseMove);
//         }
// 	}, [ ])

//     const handleMouseMove = (e, object = null) => {

//         const xPos = e.pageX;
//         const yPos = e.pageY;
//         const objectXPos = object?.offsetLeft - object?.offsetWidth / 2 || window.innerWidth / 2 // SM-Check
//         const objectYPos = object?.offsetTop - object?.offsetHeight / 2 || window.innerHeight / 2 // SM-Check

//         const getDistanceFrom = () => {
            
//             // Search the furthest Edge from Object
//             const distanceObjectToEdges = [
//                 Math.hypot(objectXPos - 0, objectYPos - 0 ),
//                 Math.hypot(objectXPos - window.innerWidth, objectYPos - 0 ),
//                 Math.hypot(objectXPos - window.innerWidth, objectYPos - window.innerHeight ),
//                 Math.hypot(objectXPos - 0, objectYPos - window.innerHeight ),
//             ]
//             const distanceObjectToFurthestEdge = +Math.max(...distanceObjectToEdges).toFixed(2);
//             const distanceFrom = Math.hypot(objectXPos - xPos, objectYPos - yPos );

//             return {
//                 absolute: +distanceFrom.toFixed(2),
//                 relative: +Math.abs(distanceFrom / distanceObjectToFurthestEdge).toFixed(2),
//             }
//         }

//         // setReturnObject({
//         //     xPos,
//         //     yPos,
//         //     distanceFromObject: getDistanceFrom(),
//         // })

//         mousePosition = {
//             xPos,
//             yPos,
//             distanceFromObject: getDistanceFrom(),
//         };

//         callback( mousePosition );
//     }
// }

export const useSiteHead = ( baseUrl, siteName, pageContent ) => {

    const { title, excerpt } = pageContent
    const description = pageContent.seo.opengraphDescription || ( excerpt && excerpt.replace(/(&lt;([^>]+)>)/gi, "")) || 'some description';
    const imageUrl = getWordpressImage( pageContent.featuredImage )?.large?.sourceUrl || '';
    const url = baseUrl + pageContent.slug

    return {
        siteName,
        title,
        description,
        imageUrl,
        url
    }
}

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalContent = useRef({
        images: []
    })
    const [modalContentExport, setModalContentExport] = useState({})
    // const modalContentMemo = useMemo(() => function, input)

    const openModal = () => {
        setIsModalOpen(true);
        console.log('open Modal', isModalOpen);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        console.log('close Modal', isModalOpen);
    }

    // useEffect(() => {
    //     console.log(modalContent.current);
    //     setModalContentExport(modalContent.current);
    // }, [ ])

    const addImageToLightbox = ( image ) => {
        // setContent( prev => {
        //     return {
        //         ...prev,
        //         // images: [
        //         //     ...prev.images,
        //         //     image
        //         // ]
        //     }
        // })
        // setContent({images: [ image ]})
        modalContent.current = {
            ...modalContent.current,
            images: {
                ...modalContent.current.images,
                [image.id]: image
            }
        }
        // console.log(modalContent, image)
    }

    return {
        openModal,
        closeModal,
        isModalOpen,
        addImageToLightbox,
        //TODO: check double current
        modalContent: modalContentExport
    }
}

export const useTranslation = ( translations ) => {

    const siteLocale = defaultStore?.base?.lang || defaultStore?.router?.locale || 'de';
    let translated = translations['de_CH'] || translations['de_DE'] || translations['de'];

    for (const locale in translations) {
        if (Object.hasOwnProperty.call(translations, locale)) { 
            if ( siteLocale.includes('en') && locale.includes('en')) {
                translated = translations[locale]
            }
        }
    }
    

    return translated;
}