import Link from 'next/link';
import React from 'react';

const Btn = ({ text, link }) => {
    return (
        <>
            <Link className='px-6 py-3 bg-primaryColor text-white capitalize border border-[#55372F] hover:bg-transparent hover:text-primaryColor duration-200' href={link}>{text}</Link>
        </>
    );
};

export default Btn;