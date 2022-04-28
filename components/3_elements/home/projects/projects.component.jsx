// Base
import React from 'react'
import sanitizeHtml from 'sanitize-html';

// Data
import { defaultStore } from '../../../../state/store';

// Style
import { ProjectsStyles } from './projects.styles';
import { GridStyles } from '../../../../styles/global-components.styles';

// Components
import ImageComponent from '../../../1_atoms/image/image.component';

const ProjectsComponent = ({ title, projects }) => {

    return (
        <ProjectsStyles className="bs-projects">
            <GridStyles gridColumns={12}>
                <h2 className="bs-projects__title">{ sanitizeHtml(title) }</h2>
                { projects.map( (project, i) => {
                    return (
                        project?.acfProjekt?.mainImage && 
                        <a href={project.acfProjekt.url} target="_blank" rel="noreferrer" className="bs-projects__project" key={`project-${i}`}>
                            <ImageComponent image={ project.acfProjekt.mainImage } size="large"/>
                            <h4 className="bs-projects__info">{ project.title }</h4>
                        </a> 
                    )
                })}
            </GridStyles>
        </ProjectsStyles>
    )
}

export default ProjectsComponent
