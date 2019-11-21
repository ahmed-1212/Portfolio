import React from 'react';

const Skills  = props => {
    return (
        <section className="skills py-5" id="skills">
            <div className="container">
               <div className="row">
                   <div className="col-md-5">
                       <div className="section-header mb-5">
                           <h2 className="h1 mb-4">Education And Projects</h2>
                       </div>
                       <div className="navs">
                            <ul className="list-unstyled">
                                <li className="one active" data-scholl=".project"><i className="fa fa-briefcase"></i> Projects</li>
                                <li className="one " data-scholl=".education"><i className="fa fa-graduation-cap"></i>Education</li>
                            </ul>
                        </div>
                       <div className="scholl hide education">
                            <h4>Arab University For Science And Technology, Jeddah </h4>
                            <p>Bachelor’s degree in computer science</p>
                            <span>10-2015 - 04- 2019</span>
                       </div>
                       <div className="scholl  project">
                            <h4>ELBA, Jeddah— web development/designing And Mobile App</h4>
                            <p>Recreating the website from the main Italian website with complete data entry to manage over 300 product form editing, adding or deleting, designing new pages and some section of the website.
                                Designing and developing the company app using framework7 and Cordova.
                            </p>
                            <span>4-2018 - 10- 2018</span>
                        </div>
                        <div className="scholl  project">
                            <h4>Tunsif, Jeddah— web development/designing</h4>
                            <p>Developing and designing the company website displaying the Company history with over 3 months managing the website with more edits and development.</p>
                            <span>10-2018 - 10- 2018</span>
                        </div>
                        <div className="scholl  project">
                            <h4>Kilshayclick, Jeddah—  web development/designing </h4>
                            <p>Designing and developing an online store with over 35+ pages, building the website with 2 different languages.</p>
                            <span>02-2018 - 04- 2018</span>
                        </div>
                   </div>
                   <div className="col-md-6">
                       <div className="section-header mb-5">
                           <h2 className="h1">My Skills</h2>
                       </div>
                       <h6>HTML5 <span></span></h6>
                       <div className="progrres"><span data-course="90%"></span></div>
                       <h6>CSS3 <span></span></h6>
                       <div className="progrres"><span data-course="95%"></span></div>
                       <h6>JavaScript <span></span></h6>
                       <div className="progrres"><span data-course="65%"></span></div>
                       <h6>UI & UX <span></span></h6>
                       <div className="progrres"><span data-course="45%"></span></div>
                       <h6>Vue<span></span></h6>
                       <div className="progrres"><span data-course="55%"></span></div>
                       <h6>Vue CLI<span></span></h6>
                       <div className="progrres"><span data-course="40%"></span></div>
                       <h6>React<span></span></h6>
                       <div className="progrres"><span data-course="55%"></span></div>
                       <h6>Jquery <span></span></h6>
                       <div className="progrres"><span data-course="85%"></span></div>
                       <h6>SEO <span></span></h6>
                       <div className="progrres"><span data-course="64%"></span></div>
                   </div>
               </div>
            </div>
        </section>
    );
}

export default Skills;