import Image from "next/image";
import bg from "@/../public/newsletter-bg.jpg"
import RoomCard from "@/components/RoomCard";
import Container from "@/components/Container";
import Newsletter from "@/app/sections/Newsletter";
import Testimonial from "@/app/sections/Testimonial";
import Pagination from "@/components/Pagination";
import { BsSortAlphaDownAlt } from "react-icons/bs";

const Rooms = () => {
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
        <div>
            <div className="relative">
                <div className="md:py-32 py-16 bg-[#55372fbe] text-center">
                    <h5 className="md:text-6xl text-4xl text-white">All Rooms</h5>
                </div>
                <Image src={bg} alt="newsletter bg" fill={true} className="object-cover -z-50"></Image>
            </div>
            {/* all rooms */}
            <Container>
                <div className="md:my-20 my-10">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-lg font-medium">{rooms.length} Rooms</p>
                        <div className="flex items-center gap-3">
                            <p className="flex items-center gap-2 w-[100px]"><span>Sort By</span><BsSortAlphaDownAlt className="text-2xl"></BsSortAlphaDownAlt></p>
                            <select className="select w-[150px] border border-primaryColor rounded-sm focus:outline-none focus:border-primaryColor h-[35px]">
                                <option disabled selected>Sort by</option>
                                <option>Price</option>
                                <option>Rating</option>
                                <option>Capacity</option>
                            </select>
                        </div>
                    </div>
                    <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
                        {
                            rooms.map(room =>
                                <RoomCard key={room.room_id} roomInfo={room}></RoomCard>)
                        }
                    </div>
                    <Pagination></Pagination>
                </div>
            </Container>

            {/* guest testimonial */}
            <Testimonial></Testimonial>

            {/* newsletter section */}
            <Newsletter></Newsletter>
        </div>
    );
};

export default Rooms;