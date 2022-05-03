import React, { useState } from 'react'
import ButtonComponent from '../../1_atoms/button/button.component'
import { DebugControlsStyles } from './debug-controls.styles'
import { defaultStore } from '../../../state/store';

const DebugControls = ({ handleClick }) => {

    const [isGrabbing, setIsGrabbing] = useState(false)
    
    const state = {
        ...defaultStore,
        router: {
            ...defaultStore.router,
            components: {}
        }
    }

    // console.log(state)

    return (
        <DebugControlsStyles 
            onMouseDown={() => { setIsGrabbing(true) }} 
            onMouseUp={() => { setIsGrabbing(false) }}
            onMouseLeave={() => { setIsGrabbing(false) }}
            isGrabbing={ isGrabbing }  
        >
            <ButtonComponent 
                label="Toggle Inverted Mode" 
                handleClick={ handleClick } 
                isGrabbing={ isGrabbing }    
            />
            <pre className="state">
                { JSON.stringify(state, null, 2)}
            </pre>
        </DebugControlsStyles>
    )
}

export default DebugControls