// Base
import React from 'react'
import sanitizeHtml from 'sanitize-html';

// Data
import { defaultStore } from '../../../../state/store';

// Style
import { ClientsStyles } from './clients.styles';
import { GridStyles } from '../../../../styles/global-components.styles';

// Components
import ImageComponent from '../../../1_atoms/image/image.component';
import { useAppearAnimation } from '../../../../utils/hooks';
import { animAppearChild } from '../../../../styles/animation';
import { motion } from 'framer-motion';

const ClientsComponent = ({ title, clients }) => {


    return (
        <ClientsStyles className="bs-clients">
            { useAppearAnimation(
                <GridStyles gridColumns={12}>
                    <h2 className="bs-clients__title">{ sanitizeHtml(title) }</h2>
                    { clients.map( (client, i) => {
                        return (
                            <motion.a 
                                variants={ animAppearChild({ movement: false, opacity: true })} 
                                whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                                href={client.acfKunden.url}
                                target="_blank"
                                rel="noreferrer"
                                className="bs-clients__client"
                                key={`project-${i}`}
                            >
                                <div className="bs-image">
                                    <img src={ defaultStore.theme.negative ? client.acfKunden.logoLight.mediaItemUrl :  client.acfKunden.logoDark.mediaItemUrl } alt={ client.acfKunden.logoDark.altText } />
                                </div>
                                {/* <ImageComponent image={defaultStore.theme.negative ? client.acfKunden.logoLight :  client.acfKunden.logoDark }/> */}
                            </motion.a>
                        )
                    })}
                </GridStyles>
            )}
        </ClientsStyles>
    )
}

export default ClientsComponent
