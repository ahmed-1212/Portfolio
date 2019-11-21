import React from 'react';

const Contact = props => {
    return (
        <section className="contact  py-5" id="contact">
            <div className="over"></div>
            <div className="container">
                <div className="section-header mb-5 text-center">
                   <h2 className="h1 ">Contact Me</h2>
               </div>
               <div className="row mb-5">
                <div className="offset-lg-1 col-lg-10 ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info-single">
                                <h4><i className="fa fa-location-arrow"></i> Location</h4>
                                <div className="contact-text">
                                    <a>Saudi Arabia, Jeddah City</a>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-single">
                                <h4><i className="fa fa-envelope"></i> Email</h4>
                                <div className="contact-text">
                                    <a href="mailto:dhafer95@outlook.com">dhafer95@outlook.com</a>
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-single">
                                <h4><i className="fa fa-phone"></i> Phone</h4>
                                <div className="contact-text">
                                    <a href="tel:(+966)550313936">(+966)550313936</a>
                                    <i className="fa fa-phone"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="offset-lg-1 col-lg-10   mb-4">
                    <form action="location.php" method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-groub">
                                    <input type="text" className="form-control input-lg" name="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-groub">
                                    <input type="email" className="form-control input-lg" name="email" placeholder="E-Mail" />
                                </div>
                            </div>
                        </div>
                        <div className="form-groub">
                            <input type="tel" className="form-control input-lg" name="tel" placeholder="Phone" />
                        </div>
                        <div className="form-groub">
                            <textarea className="form-control input-lg" name="message" placeholder="Massege"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-2">
                                <button type="submit" name="send" className="btn">SEND</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="reset" className="btn">CLEAR</button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        </form>
                    </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;