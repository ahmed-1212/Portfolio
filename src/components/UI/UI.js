import React from 'react';
import Aux from '../../hoc/Aux'
const UI = () => {
    return (
        <Aux>
            

            <div className="loading ">
                <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
                </div>
            </div>

            

                <div id="tap-up" >
                    <i className="fa fa-hand-o-up"></i>
                </div>

           

                <div className="changer">
                    <div className="black "></div>
                    <div className="white"></div>
                    <span className="spiner"><i className="fa fa-gear"></i></span>
                </div>    

            
        </Aux>
    )
}

export default UI;