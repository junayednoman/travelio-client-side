import Image from 'next/image';
import { GiThermometerScale } from "react-icons/gi";
import { FaEye, FaRegUser } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import featuredIcon from "@/../public/featured-icon.png"
import axios from 'axios';

const RoomCard = ({ roomInfo }) => {

    const { image, name, price, capacity, size, view, featured, offer, _id, room_views, available } = roomInfo;
    const handleUpdateRoomsViews = () => {
        const updatedData = { room_views: room_views + 1 };
        axios.patch(`http://localhost:5000/api/rooms/${_id}`, updatedData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='border w-full'>
            <div className=''>
                <div>
                    <Link onClick={handleUpdateRoomsViews} className='max-w-full block overflow-hidden' href={`/room/${_id}`}>
                        <div className='h-[230px] bg-center bg-no-repeat bg-cover max-w-full hover:scale-105 duration-300' style={{ backgroundImage: `url(${image})` }}>
                            <div className={`duration-300 flex flex-wrap justify-between ${available ? '' : 'items-center'} p-4 px-6 ${!available && 'bg-[#ffffffb5]'} h-full`}>
                                {
                                    available && featured &&
                                    <div className='px-3 flex gap-1 items-center text-sm bg-[#fff] text-primaryColor h-[30px] rounded-sm'><span>Featured</span> <Image width={15} src={featuredIcon} alt='featured icon'></Image></div>
                                }
                                {
                                    available && offer &&
                                    <div className='text-white font-semibold'>{offer}% Off</div>
                                }
                                {
                                    !available &&
                                    <h5 className='w-full text-center text-2xl'>Unavailable</h5>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
                <div className=''>
                    <div className='flex items-center justify-between md:p-4 p-3 pl-5 border-b'>
                        <h5 className='md:text-[22px] text-xl font-medium'>{name}</h5>
                        <p className='flex items-center gap-2'>
                            <FaEye className='text-lg'></FaEye>
                            <span>{room_views}</span>
                        </p>
                    </div>
                    <ul className='space-y-3 p-5 pb-2'>
                        <li className='flex items-center gap-1 text-[15px]'><FaRegUser className='text-primaryColor'></FaRegUser><span>Capacity: {capacity}</span></li>
                        <li className='flex items-center gap-1 text-[15px]'><GiThermometerScale className='text-primaryColor text-lg'></GiThermometerScale><span>Size: {size}</span></li>
                        <li className='flex items-center gap-1 text-[15px]'><GrOverview className='text-primaryColor'></GrOverview><span>View: {view}</span></li>
                    </ul>
                    <div className='grid grid-cols-2 items-center justify-between gap-6 mt-3 p-5 pt-0'>
                        <p className='text-primaryColor'>${price} / Night</p>
                        <div>
                            <Link onClick={handleUpdateRoomsViews} href={`/room/${_id}`} className='flex items-center justify-end gap-0 w-full ml-auto text-primaryColor iconBtn'>
                                View Room
                                <IoIosArrowRoundForward className='text-[28px] myIcon duration-300' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;