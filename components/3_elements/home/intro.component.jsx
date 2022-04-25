// Base
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { IntroStyles } from './intro.styles';

const IntroComponent = () => {

    const ref = useRef();

    useEffect(() => {
        defaultStore.introHeight = ref.current.offsetHeight || 0;
    }, [ ref ])

    return (
        <IntroStyles ref={ ref } className="intro">
            <div className="text">
                <h1 className="wordmark">bachstein</h1>
                <div className="strapline">Agentur für Web Design</div>
            </div>
        </IntroStyles>
    )
}

export default IntroComponent
