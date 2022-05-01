import React, { useState } from 'react'

// Style
import { ProjectStyles } from './project.styles';

// Data
import { defaultStore } from '../../../state/store';

// Components
import ImageComponent from '../../1_atoms/image/image.component';

// Animation
import { motion } from 'framer-motion';
import { animAppearChild } from '../../../styles/animation';

const ProjectComponent = ({ project, index }) => {

    const [isInView, setisInView] = useState(false);

    const animInfo = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 0.9,
            transition: {
                duration: .1,
            }
        }
    }

    return (
        <ProjectStyles
            className={`bs-project`}
            isInView={isInView}
            href={project.acfProjekt.url}
            target="_blank"
            rel="noreferrer"
            key={`project-${index}`}
        >  
            <motion.div style={{width: '100%', height: '100%'}} variants={ animAppearChild({ movement: false, opacity: true }) }>
                <ImageComponent image={ project.acfProjekt.mainImage } size="large"/>
                <motion.h4 
                    variants={ animInfo }
                    className="bs-projects__info"
                    initial='hidden'
                    whileInView={ defaultStore.deviceDetector.mode == 'mobile' ? 'show' : 'hidden' }
                    whileHover={ defaultStore.deviceDetector.mode == 'mobile' ? 'hidden' : 'show' }
                    viewport={{ margin: '-200px', once: false }}
                >
                    { project.title }
                </motion.h4>
            </motion.div>
        </ProjectStyles>
    )
}

export default ProjectComponent