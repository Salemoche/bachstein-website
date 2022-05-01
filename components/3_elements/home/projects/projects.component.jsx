// Base
import React from 'react'
import sanitizeHtml from 'sanitize-html';

// Style
import { ProjectsStyles } from './projects.styles';
import { GridStyles } from '../../../../styles/global-components.styles';
import ProjectComponent from '../../../2_molecules/project/project.component';

// Animation
import { motion } from 'framer-motion';
import { animAppearChild } from '../../../../styles/animation';
import { useAppearAnimation } from '../../../../utils/hooks';

const ProjectsComponent = ({ title, projects }) => {
    return (
        <ProjectsStyles className="bs-projects">
            { useAppearAnimation(
                <GridStyles gridColumns={12}>
                    <h2 className="bs-projects__title">{ sanitizeHtml(title) }</h2>
                    { projects?.map( (project, i) => {
                        return (
                            project?.acfProjekt?.mainImage && 
                                <ProjectComponent project={project} index={i} />
                        )
                    })}
                </GridStyles>
            )}
        </ProjectsStyles>
    )
}

export default ProjectsComponent
