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
            "name": "Forest Suite",
            "price": 150,
            "image": "https://i.postimg.cc/s2GXXFpQ/chair-sits-cabinstyle-bedroom.jpg",
            "capacity": 2,
            "size": "Medium",
            "view": "Forest",
            "link": "/",
            "featured": true,
            "offer": 10
        },
        {
            "room_id": 2,
            "name": "Urban Studio",
            "price": 120,
            "image": "https://i.postimg.cc/ncNNJ6cw/interior-bedroom-white-creamy-tones.jpg",
            "capacity": 1,
            "size": "Small",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 14
        },
        {
            "room_id": 3,
            "name": "Deluxe Double Room",
            "price": 250,
            "image": "https://i.postimg.cc/ydY37kwQ/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai.jpg",
            "capacity": 2,
            "size": "Medium",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 10
        },
        {
            "room_id": 4,
            "name": "Standard Single Room",
            "price": 150,
            "image": "https://i.postimg.cc/8cwj9DK8/bed-set-up-valentines-day.jpg",
            "capacity": 1,
            "size": "Small",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 5
        },
        {
            "room_id": 5,
            "name": "Forest Luxury suite",
            "price": 350,
            "image": "https://i.postimg.cc/9fNJV9ct/luxury-bedroom-with-modern-design-elegance-generative-ai.jpg",
            "capacity": 4,
            "size": "Large",
            "view": "forest",
            "link": "/",
            "featured": true,
            "offer": 15
        },
        {
            "room_id": 6,
            "name": "Family Room",
            "price": 300,
            "image": "https://i.postimg.cc/4dCSCtf7/2071.jpg",
            "capacity": 3,
            "size": "Medium",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 12
        },
        {
            "room_id": 7,
            "name": "Penthouse Suite",
            "price": 500,
            "image": "https://i.postimg.cc/SNQcKsjn/2150683481.jpg",
            "capacity": 4,
            "size": "Extra Large",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 20
        },
        {
            "room_id": 8,
            "name": "Accessible Room",
            "price": 200,
            "image": "https://i.postimg.cc/qMgXLqr9/2150897745.jpg",
            "capacity": 2,
            "size": "Medium",
            "view": "City",
            "link": "/",
            "featured": true,
            "offer": 8
        }
    ]

    return (
        <div className='md:mb-20 mb-14'>
            <Container>
                <SectionTitle heading="Our Featured Rooms" subheading={"Indulge in Comfort and Elegance with Our Featured Room Selections"}></SectionTitle>
                <Swiper
                    speed={900}
                    loop={true}
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
                        delay: 2400,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        rooms.map(room => <SwiperSlide key={room.room_id} >
                            <RoomCard roomInfo={room}></RoomCard>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </Container>
        </div>
    );
};

export default FeaturedRooms;