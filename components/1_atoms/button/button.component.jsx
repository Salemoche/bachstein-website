import React from 'react'

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ButtonStyles, ButtonLinkStyles } from './button.styles';
import Link from 'next/link';
import { IconStyles } from '../../../styles/global-components.styles';

const ButtonComponent = ({ label, handleClick, className, link, icon = null }) => {

    if ( link ) {
        return (
            <ButtonStyles className={ `bs-button ${className}` } icon={!!icon}>
                <span className="bs-button__content">
                    <Link href={link} className={ `bs-button__content` } onClick={ handleClick } >{label}</Link>
                </span>
                { icon && <IconStyles className="bs-icon" dangerouslySetInnerHTML={{ __html: icon }}/>}
            </ButtonStyles>
        )
    } else {

        return (
            <ButtonStyles className={ `bs-button ${className}` } onClick={ handleClick } icon={!!icon}>
                <span className="bs-button__content">{ label }</span>
                { icon && <IconStyles className="bs-icon" dangerouslySetInnerHTML={{ __html: icon }}/>}
            </ButtonStyles>
        )
    }

}

export default ButtonComponent