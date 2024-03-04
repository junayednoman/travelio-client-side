import BigPromoCard from '@/components/BigPromoCard';
import Container from '@/components/Container';
import React from 'react';

const GridPromo = () => {
    return (
        <div className='xl:my-24 md:my-12 my-10 mt-3'>
            <Container>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 items-center md:gap-10 gap-6'>
                    <BigPromoCard bg="https://i.postimg.cc/wTHj4JrD/2150683399.jpg" heading={"Unlock Discounts on Your Next Stay"} subHeading={"Exclusive Offer Inside!"} btnText={"Book Now"} btnLink={"/"}></BigPromoCard>
                    <BigPromoCard bg="https://i.postimg.cc/fyQWPNKh/room-and-headphon-night-335507735-1.png" heading={"Exclusive Discounts on Your Next Reservation"} subHeading={"23% Off!"} btnText={"Book Now"} btnLink={"/"}></BigPromoCard>
                </div>
            </Container>
        </div>
    );
};

export default GridPromo;