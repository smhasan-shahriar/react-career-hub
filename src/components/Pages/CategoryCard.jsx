import React from 'react';

const CategoryCard = ({card}) => {
    const {id, logo, category_name, availability} = card;

    return (
        <div className='p-10  linear-bg'>
            <img src={logo} alt="" />
            <h3 className='mt-8 mb-2 text-xl text-[#474747] font-extrabold'>{category_name}</h3>
            <p className='text-[#A3A3A3] font-medium'>{availability}</p>
        </div>
    );
};

export default CategoryCard;