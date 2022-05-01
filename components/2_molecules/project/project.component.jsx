import React, { useState } from 'react'

// Style
import { ProjectStyles } from './project.styles';

// Data
import { defaultStore } from '../../../state/store';

// Components
import ImageComponent from '../../1_atoms/image/image.component';

// Animation
import { motion } from 'framer-motion';

const ProjectComponent = ({ project, index }) => {

    const [isInView, setisInView] = useState(false);

    return (
        <ProjectStyles
            className={`bs-project`}
            isInView={isInView}
            mode={ defaultStore.deviceDetector.mode }
            href={project.acfProjekt.url}
            target="_blank"
            rel="noreferrer"
            key={`project-${index}`}
        >
            <ImageComponent image={ project.acfProjekt.mainImage } size="large"/>
            <motion.h4 
                className="bs-projects__info"
                onViewportEnter={(e) => { setisInView(true); console.log(e.boundingClientRect.top) }}
                onViewportLeave={(e) => { setisInView(false); console.log(e.boundingClientRect.top) }}
            >
                { project.title }
            </motion.h4>
        </ProjectStyles>
    )
}

export default ProjectComponent