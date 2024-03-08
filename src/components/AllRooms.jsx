"use client"
import RoomCard from "./RoomCard";

const AllRooms = ({ rooms }) => {
    return (
        <div>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
                {
                    rooms?.map(room =>
                        <RoomCard key={room.room_id} roomInfo={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default AllRooms;