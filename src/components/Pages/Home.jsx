import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <div className='linear-bg'>
                <div className='max-w-[1320px] mx-auto'>
                    <Banner></Banner>
                </div>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <Category></Category>
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;