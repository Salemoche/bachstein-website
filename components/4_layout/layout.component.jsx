//Base
import { useEffect } from 'react';

// Data
import { defaultStore } from '../../state/store';
import { useSnapshot } from 'valtio';

// Components
import MetaComponent from '../3_elements/meta/meta.component';
import NavigationComponent from '../3_elements/navigation/navigation.component';
import FooterComponent from '../3_elements/footer/footer.component';
import { useState } from 'react';

// Hooks
import { useSiteHead } from '../../utils/hooks';

const LayoutComponent = ({ 
    children, 
    hasNavigation = true, 
    hasFooter = true, 
    mainMenu = {}, 
    footerMenu = {},
    baseUrl,
    siteName,
    content,
    settings
}) => {

    const { footerHeight, headerHeight, deviceDetector } = useSnapshot( defaultStore );
    const [mainStyle, setMainStyle] = useState({})
    const headTags = useSiteHead( baseUrl, siteName, content );

    // useEffect(() => {
    //     if ( !window ) return
    //     const topSpacing = deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small' ? 0 : headerHeight;
    //     setMainStyle({
    //         marginTop: topSpacing,
    //         minHeight: window.innerHeight - topSpacing - footerHeight + 'px'
    //     })
    // }, [ footerHeight, headerHeight, deviceDetector ])

    return (
        <>
            <MetaComponent headTags={ headTags }/>
            { hasNavigation &&
                <NavigationComponent mainMenu={ mainMenu } />
            }
            <main style={ mainStyle }>
                { children }
            </main>
            { hasFooter &&
                <FooterComponent image={ settings ? settings.footerImage : null} />
            }
        </>
    )
}

export default LayoutComponent
