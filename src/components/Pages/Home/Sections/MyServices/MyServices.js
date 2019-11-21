import React, { Component } from 'react'
import axios from 'axios';
import Services from './services'

class MyServices extends Component {

    state = {
        services: []
    }

    componentDidMount () {
        axios.get('https://next.json-generator.com/api/json/get/4JCaTv12w').then(response => {
            const service = response.data;
            const updateServices = service.map(serve => {
                return {
                    ...serve
                }
            });

            this.setState({
                services: updateServices
            })
        })
    }

    render () {

        const service = this.state.services.map(serve => {
            return (
                <Services 
                serviceImage={serve.serviceImage}
                alt={serve.alt}
                serviceNum={serve.serviceNum}
                service={serve.service}
                key={serve.alt}
                />
            )
        })

        return(
            <section className="services py-5" id="services">
                <div className="container">
                    <div className="section-header mb-5 text-center">
                        <h2 className="h1 mb-4">My Services</h2>
                    </div>
                    <div className="row">
                        {service}
                    </div>
                </div>
            </section>
        )
    }
}

export default MyServices;