import Btn from '@/components/Btn';
import Container from '@/components/Container';
import React from 'react';

const Banner = () => {
    return (
        <div className='text-center text-white bg-[url(https://i.postimg.cc/L6SGYvcr/banner.jpg)] bg-center bg-no-repeat bg-cover'>
            <div className='bg-[#55372f62] py-[220px]'>
                <Container>
                    <h1 className='text-8xl uppercase'>Book Your Stay</h1>
                    <p className='text-lg my-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit maxime incidunt aliquam iusto sit.</p>
                    <Btn text="Book Now" link={"/"}></Btn>
                </Container>
            </div>
        </div>
    );
};

export default Banner;