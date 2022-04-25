import React, { useState } from 'react'

// Data
import { defaultStore } from '../../../state/store';
import { useSnapshot } from 'valtio';

// Style
import { LanguageSwitcherStyles } from './language-switcher.styles';

const LanguageSwitcherComponent = ({ label, handleClick, className }) => {

    // let { languages } = useSnapshot( defaultStore )

    const setLanguage = ( language ) => {
        defaultStore.base.lang = language
        console.log('set')
    }

    const getLanguage = ( language ) => {
        if ( language ) {
            setLanguage( language );
        } else if ( defaultStore?.base?.lang?.includes('de') ) {
            setLanguage('de');
        } else if ( defaultStore?.base?.lang?.includes('en') ) {
            setLanguage('en');
        } else if ( defaultStore?.router?.locale?.includes('en') ) {
            setLanguage('en');
        } else {
            setLanguage('de')
        }

    }

    // const [currentLanguage, setCurrentLanguage] = useState( getLanguage() )

    return (
        <LanguageSwitcherStyles className={ className } onClick={ handleClick } >
            <div onClick={() => setLanguage('en')} className="bs-language">en</div>
            <div onClick={() => setLanguage('de')} className="bs-language">de</div>
        </LanguageSwitcherStyles>
    )
}

export default LanguageSwitcherComponent