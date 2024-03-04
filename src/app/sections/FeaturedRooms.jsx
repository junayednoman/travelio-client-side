import RoomCard from '@/components/RoomCard';
import React from 'react';
import Container from '@/components/Container';

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
        },
        {
            "room_id": 2,
            "name": "Ocean Loft",
            "price": 250,
            "image": "https://i.postimg.cc/g2tZ1c5y/outdoor-swimming-pool.jpg",
            "capacity": 4,
            "size": "Large",
            "view": "Beach",
            "link": '/',
        },
        {
            "room_id": 3,
            "name": "Sky Room",
            "price": 180,
            "image": "https://i.postimg.cc/g2tZ1c5y/outdoor-swimming-pool.jpg",
            "capacity": 3,
            "size": "Medium",
            "view": "City",
            "link": '/',
        },
        // {
        //     "room_id": 4,
        //     "name": "Sunset Suite",
        //     "price": 300,
        //     "image": "https://i.postimg.cc/g2tZ1c5y/outdoor-swimming-pool.jpg",
        //     "capacity": 2,
        //     "size": "Large",
        //     "view": "Beach",
        // "link": '/',
        // },
        // {
        //     "room_id": 5,
        //     "name": "Urban Studio",
        //     "price": 120,
        //     "image": "https://i.postimg.cc/g2tZ1c5y/outdoor-swimming-pool.jpg",
        //     "capacity": 1,
        //     "size": "Small",
        //     "view": "City",
        // "link": '/',
        // }
    ]

    return (
        <>
            <Container>
                <div className='grid lg:grid-cols-3 md:gap-6'>
                    {
                        rooms.map(room => <RoomCard key={room.room_id} name={room.name} img={room.image} price={room.price} capacity={room.capacity} size={room.size} view={room.view} link={room.link}></RoomCard>)
                    }
                </div >
            </Container>
        </>
    );
};

export default FeaturedRooms;