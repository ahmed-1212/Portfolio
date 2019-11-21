import React from 'react';

const Work = props => {
    
    return (
        <div className="col-md-4 mt-3 hvr-grow mb-4 workk">
            <div className={props.classes}>
                <a href={props.webName} target="_blank"><img className="mokup img-responsive" src={props.mokup} alt={props.alt}/></a>
                <h3><a href={props.webUrl} target="_blank">{props.workName}</a></h3>
                <p>{props.workType}</p>
            </div>
        </div>
    )
}

export default Work;