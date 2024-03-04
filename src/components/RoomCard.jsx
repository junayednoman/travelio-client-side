import Image from 'next/image';
import { GiThermometerScale } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import featuredIcon from "@/../public/featured-icon.png"

const RoomCard = ({ img, name, price, capacity, size, view, link, featured, offer }) => {
    return (
        <div className='border w-full'>
            <div>
                <Link className='max-w-full block overflow-hidden' href={link}>
                    <div className='h-[230px] bg-center bg-no-repeat bg-cover max-w-full hover:scale-105 duration-300 flex justify-between p-4 px-6' style={{ backgroundImage: `url(${img})` }}>
                        {
                            featured &&
                            <div className='px-3 flex gap-1 items-center text-sm bg-[#55372faa] text-white h-[30px] rounded-sm'><span>Featured</span> <Image width={15} src={featuredIcon} alt='featured icon'></Image></div>
                        }
                        {
                            offer &&
                            <div className='text-primaryColor font-semibold'>{offer}% Off</div>
                        }
                    </div>
                </Link>
            </div>
            <div className=''>
                <h6 className='md:text-2xl text-xl font-medium md:p-4 p-3 pl-5 border-b'>{name}</h6>
                <ul className='space-y-3 p-5 pb-2'>
                    <li className='flex items-center gap-1 text-[15px]'><FaRegUser className='text-primaryColor'></FaRegUser><span>Capacity: {capacity}</span></li>
                    <li className='flex items-center gap-1 text-[15px]'><GiThermometerScale className='text-primaryColor'></GiThermometerScale><span>Size: {size}</span></li>
                    <li className='flex items-center gap-1 text-[15px]'><GrOverview className='text-primaryColor'></GrOverview><span>View: {view}</span></li>
                </ul>
                <div className='grid grid-cols-2 items-center justify-between gap-6 mt-3 p-5 pt-0'>
                    <p className='font-medium'>${price}</p>
                    <Link href="/" className='flex items-center justify-end gap-1 w-full ml-auto'>
                        View Room
                        <IoIosArrowRoundForward className='text-[28px]' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;