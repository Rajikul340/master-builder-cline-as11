import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Success from '../Success/Success';
import TeamSection from '../TeamSection/TeamSection';

const Home = () => {
    return (
        <div>
            <Banner ></Banner>
            <TeamSection></TeamSection>
            <Success></Success>
            <Service></Service>
        </div>
    );
};

export default Home;