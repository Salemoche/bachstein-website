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

const ClientsComponent = ({ title, clients }) => {

    return (
        <ClientsStyles className="bs-clients">
            <GridStyles gridColumns={12}>
                <h2 className="bs-clients__title">{ sanitizeHtml(title) }</h2>
                { clients.map( (client, i) => {
                    return (
                        <a href={client.acfKunden.url} target="_blank" className="bs-clients__client" key={`project-${i}`}>
                            <ImageComponent image={defaultStore.theme.negative ? client.acfKunden.logoLight :  client.acfKunden.logoDark }/>
                        </a>
                    )
                })}
            </GridStyles>
        </ClientsStyles>
    )
}

export default ClientsComponent
