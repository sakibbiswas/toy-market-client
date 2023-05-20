import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../galary/Gallery';
import Tabse from '../TABS/Tabse';
import useTitle from '../../components/Hooks/Usetitle';
import Other from '../other/Other';




const Home = () => {
    useTitle('Home')
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabse></Tabse>
            <Other></Other>
        </div>
    );
};

export default Home;