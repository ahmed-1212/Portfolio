import React from 'react';

const Companies = () => {
    return (
        <section className="companies py-5 text-center">
            <div className="container">
               <div className="section-header mb-5">
                   <h2 className="h1">proud To Work With</h2>
                </div>
                <div className="row images">
                    <div className="col-lg-4 my-5">
                        <img src="https://sa.kilshayclick.com/old/public/images/newlogo.png" alt="kilshayclick" />
                    </div>
                    <div className="col-lg-4 my-5">
                        <img src="http://www.osamatoma.net/elba/public/img/logo.png" alt="elba" />
                    </div>
                    <div className="col-lg-4 my-5">
                        <img className="last-image" src="https://darghazlanq8.com/public/images/logo/logo.png" alt="darghazlan" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Companies;