import React, {Component} from 'react';
import axios from 'axios';
import Work from './Work';


class MyWork extends Component {

    state = {
        works: []
    }

    componentDidMount () {

        axios.get('https://next.json-generator.com/api/json/get/4ySc6wJnw').then(Response => {

            const works = Response.data
            const updateWorks = works.map(work => {
                return {
                    ...work   
                }
            })
            this.setState({works: updateWorks})
        }).catch(error => {
            console.log(error)
        })
    }

    render () {

        const work = this.state.works.map(order => {
            return (
                <Work 
                    classes={order.classes}
                    webName={order.webName}
                    mokup={order.mokup}
                    webUrl={order.webName}
                    workName={order.workName}
                    workType={order.workType}
                    alt={order.alt}
                    key={order.alt}
                />
            )
        })

        return (
            <section className="my-work py-5 text-center" id="work">
           <div className="container">
               <div className="section-header mb-5">
                   <h2 className="h1">My Work</h2>
                </div>
                    <div className="row">
                        {work}
                    </div>
            </div>
            </section>
        )
    }
}

export default MyWork;