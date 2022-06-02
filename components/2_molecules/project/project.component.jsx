import React, { useState } from 'react'

// Style
import { ProjectStyles } from './project.styles';

// Data
import { defaultStore } from '../../../state/store';

// Components
import ImageComponent from '../../1_atoms/image/image.component';

// Animation
import { motion } from 'framer-motion';
import { appearChild } from '../../../utils/helpers';

const ProjectComponent = ({ project, index }) => {

    const [isHovered, setIsHovered] = useState(false);

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
            isHovered={isHovered}
            href={project.acfProjekt.url}
            target="_blank"
            rel="noreferrer"
            key={`project-${index}`}
        >  
            <motion.div style={{width: '100%', height: '100%'}} variants={ appearChild({ movement: false, opacity: true }) }>
                <ImageComponent image={ project.acfProjekt.mainImage } size="large"/>
                <motion.div
                    variants={ animInfo }
                    className="bs-projects__info"
                    initial='hidden'
                    whileInView={ defaultStore.deviceDetector.mode == 'mobile' ? 'show' : 'hidden' }
                    whileHover={ defaultStore.deviceDetector.mode == 'mobile' ? 'hidden' : 'show' }
                    onMouseEnter={() => {setIsHovered(true)}}
                    onMouseLeave={() => {setIsHovered(false)}}
                    onViewportEnter={() => { if (defaultStore.deviceDetector.mode == 'mobile') setIsHovered(true)}}
                    onViewportLeave={() => { if (defaultStore.deviceDetector.mode == 'mobile') setIsHovered(false)}}
                    viewport={{ margin: '-200px', once: false }}
                >
                    <div className="bs-projects__info__background"></div>
                    <h4>{ project.title }</h4>
                </motion.div>
            </motion.div>
        </ProjectStyles>
    )
}

export default ProjectComponent