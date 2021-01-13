import React from 'react';
import Navbar from '../../navbar';
import TopSections from './topSections';
import Service from '../../serviceCard';
import SpecailAd from '../../components/brandlogo/speciallistAd';
import Footer from '../../components/brandlogo/Footer';

function HomePage (){
    return (
        <>
        <Navbar/>
        <TopSections/>
        <Service/>
        <SpecailAd/>
        <Footer/>
        </>
    );
}

export default HomePage;