import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        const fetchFunction = async () => {
            const response = await fetch('categories.json');
            const data = await response.json();
            setCategories(data);
        }
        fetchFunction();
    }, [])
    return (
        <div>
            <div className='mt-[130px] text-center'>
                <h3 className='text-5xl font-extrabold m-4'>Job Category List</h3>
                <p className='text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-8'>
                {
                    categories.map(card => <CategoryCard key={card.id} card={card}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;