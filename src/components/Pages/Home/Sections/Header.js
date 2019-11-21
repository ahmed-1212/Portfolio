import React from 'react';

const Header = props => {

    return (
        <header id="know">
            <div className="over text-center">
               <div className="container">
                   <div className="main-text">
                        <h2 className="h1"><span className="colord">Hi I'm </span>Ahmed Dhafer</h2>
                        <h1><span className="colord">I'm a </span><span className="about"></span></h1>
                        <p>Hi There My Name Is Ahmed Mohammed Dhafer 24 Years Old, self-learner web designer and Front-End Developer passionate and loving what I'm doing big hops and dreams and soon to be a graduate from AUFST working towards one goal one dream to a better life and turning a dream to reality. I Like To Think That live is A Journey Or Adventure And I'm Enjoing Every Moment Of It, You Can See My Work And Skills And Services Here I Hope You Like it. I Focus On Delivering Very Good Web Design That Match Your Expectation, With Good And Clean Code That Can Be Edit Or Develope At Any Time.</p>
                        <a href="https://docs.google.com/document/d/1Q8ki923fnWu-NvO39e8MeymrrnC5wEYcLCxwK5F5Z1w/edit" target="_blank"  className="btn">View My CV <i className="fa fa-file" style={{marginLeft: '10px'}}></i></a>
                   </div>
               </div>
            </div>
        </header>
    )
}

export default Header;