import React from 'react';

const Services = props => {
    return (
        <div className="col-md-4 hvr-glow pt-2">
            <div className="service-box">
                <div className="service-heade">
                    <img src={props.serviceImage} alt={props.alt} />
                    <h4 className="number">{props.serviceNum}</h4>
                </div>
                <h4 className="single-skill">{props.service}</h4>
            </div>
        </div>
    )
}

export default Services;