
"use client"
import { FaRegUser } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoLogOutOutline } from 'react-icons/io5';
import Btn from './Btn';
import useAuthInfo from '../../lib/useAuthInfo';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

const AccountOption = () => {
    const { user, loading, isShow, setIsShow, logOut } = useAuthInfo();
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                window.location.replace('/login');
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div>
            {loading ?
                <p>loading...</p>
                :
                user ?
                    <>
                        <div onClick={() => setIsShow(!isShow)} className='flex items-center gap-2 cursor-pointer'>
                            <FaRegCircleUser className='text-2xl'></FaRegCircleUser>
                            <p className='mt-[1px]'>My Account</p>
                        </div>
                        <ul className={`rounded-sm mt-2 py-2 w-[170px] border border-primaryColor bg-[#F0EDEC] absolute right-0 ${isShow ? 'z-10 top-[28px] visible' : '-z-10 invisible'}`}>
                            <li onClick={() => setIsShow(false)} className='cursor-pointer px-3 py-2 duration-200 hover:bg-[#55372f20]'>
                                <Link href="/rooms" className=' flex items-center justify-end gap-1 w-full'>
                                    <FaRegUser className='mb-[4px]' />
                                    <span>Profile</span>
                                </Link>
                            </li>
                            {/* <div className='w-full h-[1px] bg-[#55372f42]'></div> */}
                            <li onClick={handleSignOut} className='cursor-pointer px-3 py-2 flex items-center justify-end duration-200 gap-1 hover:bg-[#55372f20]'>
                                <IoLogOutOutline className='mb-[2px] text-lg' />
                                <span>Log</span>
                                Out</li>
                        </ul>
                    </>
                    :
                    <Btn text={"Register now"} link={"/sign-up"}></Btn>}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AccountOption;