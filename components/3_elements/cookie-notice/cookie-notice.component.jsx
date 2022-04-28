import React from 'react'

// Data
import { defaultStore } from '../../../state/store';

// Style
import { CookieNoticeStyles } from './cookie-notice.styles';

// Components
import ButtonComponent from '../../1_atoms/button/button.component';


const CookieNotice = ({ handleClick }) => {
    return (
        <CookieNoticeStyles>
            <div className="cookie-notice__message">Wir nutzen Cookies um deine Nutzererfahrung zu verbessern.</div>
            <ButtonComponent className="cookie-notice__button" label='ablehnen' handleClick={ () => handleClick(false) } />
            <ButtonComponent className="cookie-notice__button" label='akzeptieren' handleClick={ () => handleClick(true) } />
        </CookieNoticeStyles>
    )
}

export default CookieNotice