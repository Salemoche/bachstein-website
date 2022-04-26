import React from 'react'

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ButtonStyles, ButtonLinkStyles } from './button.styles';
import Link from 'next/link';

const ButtonComponent = ({ label, handleClick, className, link, icon = null }) => {

    if ( link ) {
        return (
            <Link href={link} className={ `bs-button ${className}` } onClick={ handleClick } >
                <a className="bs-button">{label}</a>
            </Link>
        )
    } else {

        return (
            <ButtonStyles className={ `bs-button ${className}` } onClick={ handleClick } >
                <>
                    { label }
                    { icon }
                </>
            </ButtonStyles>
        )
    }

}

export default ButtonComponent