import React from 'react';
import Header from './Sections/Header';
import Aux from '../../../hoc/hoc';
import ProjectDetails from './Sections/ProjectDetails';
const ProjectOne = props => {
    return (
        <Aux>
            <Header />
            <ProjectDetails />
        </Aux>
    )
}

export default ProjectOne;