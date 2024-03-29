import Container from '@/components/Container';
import SecondaryBtn from '@/components/SecondaryBtn';
import React from 'react';

const Banner = () => {
    return (
        <div className='text-center text-white bg-[url(https://i.postimg.cc/L6SGYvcr/banner.jpg)] bg-center bg-no-repeat bg-cover'>
            <div className='bg-[#55372f98] xl:py-[220px] lg:py-32 md:py-20 py-12'>
                <Container>
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-4xl uppercase'>Book Your Stay</h1>
                    <p className='md:text-lg text-base xl:my-16 lg:my-8 md:my-10 mt-4 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit maxime incidunt aliquam iusto sit. <br className='lg:block hidden' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <SecondaryBtn text="Book your stay" link={"/rooms"}></SecondaryBtn>
                </Container>
            </div>
        </div>
    );
};

export default Banner;