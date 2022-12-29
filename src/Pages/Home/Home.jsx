import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div className='mx-auto lg:w-1/2 mt-16'>
           <FirstSection></FirstSection>
           <SecondSection></SecondSection>
        </div>
    );
};

export default Home;