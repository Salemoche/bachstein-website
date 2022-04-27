// Base
import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { ContactFormStyles } from './contact-form.styles';
import { GridStyles } from '../../../styles/global-components.styles';
import ImageComponent from '../../1_atoms/image/image.component';

const ContactFormComponent = ({ contactFormTitle, contactFormLead, gabrielImage }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <ContactFormStyles>
            <h2 className="bs-contact-form-title">{ contactFormTitle }</h2>
            <p className="bs-contact-form-lead">{ contactFormLead }</p>
            <form ref={form} onSubmit={sendEmail}>
                <GridStyles>
                    <div className="bs-form-column column-1">
                        <label className="bs-main-label">Deine Angaben</label>
                        { defaultStore.theme.accessible && <label htmlFor='user_name'>Name</label> }
                        <input type="text" id="user_name" name="user_name" placeholder="Dein Name" required />
                        { defaultStore.theme.accessible && <label htmlFor='user_email'>Email</label> }
                        <input type="email" id="user_email" name="user_email" placeholder="Deine Email" required />
                        { defaultStore.theme.accessible && <label htmlFor='user_company'>Firma</label> }
                        <input type="text" id="user_company" name="user_company" placeholder="Deine Firma" required />
                        { defaultStore.theme.accessible && <label htmlFor='user_url'>URL</label> }
                        <input type="text" id="user_url" name="user_url" placeholder="Momentane URL" required />
                    </div>
                    <div className="bs-form-column column-2">
                        <div className="bs-form-budget">
                            <label className="bs-main-label" htmlFor="website_budget">Dein Budget in CHF</label>
                            <input type="radio" id="3000" name="website_budget" value="3000" />
                            <label htmlFor='3000'>&lt; 3000</label>
                            <input type="radio" id="10000" name="website_budget" value="10000" />
                            <label htmlFor='10000'>3000 - 1000</label>
                            <input type="radio" id="20000" name="website_budget" value="20000" />
                            <label htmlFor='20000'>10000 - 20000</label>
                            <input type="radio" id="99999" name="website_budget" value="99999" />
                            <label htmlFor='99999'>&gt; 20000</label>
                        </div>
                        <div className="bs-form-type">
                            <label className="bs-main-label">Die Art von Webseite</label>
                            <select name="website_type" id="website_type">
                                <option value="business">Geschäftsseite</option>
                                <option value="portfolio">Portfolio Seite</option>
                                <option value="other">Andere</option>
                            </select>
                        </div>
                        <div className="bs-form-message">
                            <label className="bs-main-label" htmlFor='user_message'>Deine Nachricht</label>
                            <textarea id="user_message" name="user_message" placeholder="Fragen, Wünsche, Inspirationen" />
                        </div>
                    </div>
                    <div className="bs-form-column column-3">
                        <div className="bs-form-contact">
                            <ImageComponent image={ gabrielImage } />
                        </div>
                    </div>
                </GridStyles>
                <input type="submit" value="Send" />
            </form>
        </ContactFormStyles>
    )
}

export default ContactFormComponent

