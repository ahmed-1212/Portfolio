import React from 'react';
import Header from './Sections/Header';
import Aux from '../../../hoc/Aux'
import MyWork from './Sections/MyWork/MyWork';
import Companies from '../Home/Sections/MyWork/Companies';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';
import UI from '../../UI/UI';
import MyServices from './Sections/MyServices/MyServices'
const Home = props => {
    return (
        <Aux>
            <Header />
            <MyWork />
            <Companies />
            <Skills />
            <MyServices />
            <Contact />
            <UI />
        </Aux>
    )
}

export default Home;