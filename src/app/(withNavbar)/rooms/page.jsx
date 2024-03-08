import Image from "next/image";
import bg from "@/../public/newsletter-bg.jpg"
// import RoomCard from "@/components/RoomCard";
import Container from "@/components/Container";
import Newsletter from "@/app/sections/Newsletter";
import Testimonial from "@/app/sections/Testimonial";
import Pagination from "@/components/Pagination";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import axios from "axios";
import AllRooms from "@/components/AllRooms";

const Rooms = async () => {
    const res = await axios.get("http://localhost:5000/api/rooms/");
    const rooms = res.data;

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
                    <AllRooms rooms={rooms}></AllRooms>
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