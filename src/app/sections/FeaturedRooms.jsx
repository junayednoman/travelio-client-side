"use client"
import RoomCard from '@/components/RoomCard';
import React from 'react';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const FeaturedRooms = () => {
    const rooms = [
        {
            "room_id": 1,
            "name": "Cozy Suite",
            "price": 150,
            "image": "https://i.postimg.cc/g2tZ1c5y/outdoor-swimming-pool.jpg",
            "capacity": 2,
            "size": "Medium",
            "view": "City",
            "link": '/',
            "featured": true,
            "offer": 10,
        },
        {
            "room_id": 2,
            "name": "Ocean Loft",
            "price": 250,
            "image": "https://i.postimg.cc/9Xkb7chJ/light-view-nature-blue-health.jpg",
            "capacity": 4,
            "size": "Large",
            "view": "Beach",
            "link": '/',
            "featured": true,
            "offer": false,
        },
        {
            "room_id": 3,
            "name": "Sky Room",
            "price": 180,
            "image": "https://i.postimg.cc/L5BchGZt/7542.jpg",
            "capacity": 3,
            "size": "Medium",
            "view": "City Sky",
            "link": '/',
            "featured": true,
            "offer": 11,
        },
        {
            "room_id": 4,
            "name": "Sunset Suite",
            "price": 300,
            "image": "https://i.postimg.cc/3RLp7xtm/beautiful-outdoor-tropical-beach-sea-around-samui-island-with-coconut-palm-tree-other-sunset-time.jpg",
            "capacity": 2,
            "size": "Large",
            "view": "Beach",
            "link": '/',
            "featured": true,
            "offer": false,
        },
        {
            "room_id": 5,
            "name": "Urban Studio",
            "price": 120,
            "image": "https://i.postimg.cc/fWrgZxq2/outdoor-patio-with-table-chair.jpg",
            "capacity": 1,
            "size": "Small",
            "view": "City",
            "link": '/',
            "featured": true,
            "offer": false,
        },
        {
            "room_id": 6,
            "name": "Rustic Cabin",
            "price": 200,
            "image": "https://i.postimg.cc/ydFQT5yk/aerial-view-small-cabin-hidden-dense-forest-greenery.jpg",
            "capacity": 2,
            "size": "Medium",
            "view": "Forest",
            "link": "/",
            "featured": true,
            "offer": 15
        },
        {
            "room_id": 7,
            "name": "Lakeside Retreat",
            "price": 300,
            "image": "https://i.postimg.cc/CKt54rxT/beautiful-tropical-beach-sea.jpg",
            "capacity": 4,
            "size": "Large",
            "view": "Lake",
            "link": "/",
            "featured": true,
            "offer": 20
        },
        {
            "room_id": 8,
            "name": "Mountain View Suite",
            "price": 400,
            "image": "https://i.postimg.cc/QNgNBd1r/view-island-middle-lake.jpg",
            "capacity": 3,
            "size": "Large",
            "view": "Mountain",
            "link": "/",
            "featured": true,
            "offer": 25
        }
    ]

    return (
        <>
            <Container>
                <SectionTitle heading="Our Featured Rooms" subheading={"Indulge in Comfort and Elegance with Our Featured Room Selections"}></SectionTitle>
                {/* <div className='grid lg:grid-cols-3 md:gap-6'>
                    {
                        rooms.map(room => <RoomCard key={room.room_id} name={room.name} img={room.image} price={room.price} capacity={room.capacity} size={room.size} view={room.view} link={room.link} featured={room.featured} offer={room.offer}></RoomCard>)
                    }
                </div > */}
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        670: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2100,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        rooms.map(room => <SwiperSlide key={room.room_id} >
                            <RoomCard name={room.name} img={room.image} price={room.price} capacity={room.capacity} size={room.size} view={room.view} link={room.link} featured={room.featured} offer={room.offer}></RoomCard>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </Container>
        </>
    );
};

export default FeaturedRooms;