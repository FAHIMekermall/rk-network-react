import React from 'react';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Packages from '../Packages/Packages';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Details></Details>
            <Packages></Packages>
            <Footer></Footer>
        </div>
    );
};

export default Home;