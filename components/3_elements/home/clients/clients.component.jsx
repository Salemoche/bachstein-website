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
                    console.log(client)
                    return (
                        <a href={client.acfKunden.url} target="_blank" rel="noreferrer" className="bs-clients__client" key={`project-${i}`}>
                            <div className="bs-image">
                                <img src={ defaultStore.theme.negative ? client.acfKunden.logoLight.mediaItemUrl :  client.acfKunden.logoDark.mediaItemUrl } alt={ client.acfKunden.logoDark.altText } />
                            </div>
                            {/* <ImageComponent image={defaultStore.theme.negative ? client.acfKunden.logoLight :  client.acfKunden.logoDark }/> */}
                        </a>
                    )
                })}
            </GridStyles>
        </ClientsStyles>
    )
}

export default ClientsComponent
