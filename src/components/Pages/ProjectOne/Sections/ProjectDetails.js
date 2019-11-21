import React from 'react';
import ProjectImage from '../../../../assets/work/projectone.png';

const ProjectDetails = props => {
    return (
        <section className="project py-5">
            <div className="container">
                <div className="project-image text-center">
                    <img src={ProjectImage} alt="project-image" />
                </div>
            </div>
        </section>
    )
} 

export default ProjectDetails;
