import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='xl:w-[1300px] mx-auto xl:px-12 lg:px-10 md:px-8 px-3'>
            {children}
        </div>
    );
};

export default Container;