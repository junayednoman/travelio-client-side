
import Btn from '@/components/Btn';
import { Meie_Script } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b bg-[#F8F9FA]'>
            <div className='py-3 text-primaryColor flex justify-between items-center xl:px-[130px] border-b'>
                {/* <p className='font-medium'>Lorem ipsum dolor sit amet consectetur elit!</p> */}
                <div className='flex items-center gap-5'>
                <p className='flex items-center gap-2'><i className="pi pi-phone"></i><span>+880 13453453</span></p>
                </div>
                <div className='flex items-center gap-14'>
                    <div className='flex items-center gap-4 mt-2'>
                        <a href="#" target='_blank'><i className='pi pi-facebook text-xl'></i></a>
                        <a href="#" target='_blank'><i className='pi pi-twitter text-xl'></i></a>
                        <a href="#" target='_blank'><i className='pi pi-linkedin text-lg'></i></a>
                        <a href="#" target='_blank'><i className='pi pi-instagram text-lg'></i></a>
                    </div>
                </div>
            </div >
    <div className='flex justify-between items-center xl:mx-[120px] py-5'>
        <div>
            <Link href="/">
                <h1 className='md:text-5xl text-3xl text-primaryColor'>Travelio</h1>
            </Link>
        </div>
        <div className='flex items-center gap-10'>
            {
                menuItems.map(item => <Link className='font-medium' key={item.label} href={item.url}>{item.label}</Link>)
            }
        </div>
        <div>
            <Btn text={"Book your stay"} link={"/"}></Btn>
        </div>
    </div>
        </div >
    );
};

export default Navbar;

const menuItems = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "Rooms",
        url: "/rooms"
    },
    {
        label: "About Us",
        url: "/about"
    },
    {
        label: "Blogs",
        url: "/blogs"
    },
    {
        label: "Contact",
        url: "/contact"
    },
]