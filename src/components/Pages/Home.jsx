import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';

const Home = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;