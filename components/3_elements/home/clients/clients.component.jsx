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

    console.log(clients)

    return (
        <ClientsStyles className="bs-clients">
            <GridStyles gridColumns={12}>
                <h2 class="bs-clients__title">{ sanitizeHtml(title) }</h2>
                {/* { clients.map( (client, i) => {

                })} */}
            </GridStyles>
        </ClientsStyles>
    )
}

export default ClientsComponent
