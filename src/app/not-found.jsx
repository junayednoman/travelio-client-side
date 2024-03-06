import Btn from '@/components/Btn';
import Image from 'next/image';
import notFound from "@/../public/not-found.jpg"

const NotFound = () => {
    return (
        <div className='h-[90vh] flex flex-col justify-center items-center text-center'>
            <Image width={450} height={300} className='mx-auto' src={notFound} alt='not found image'></Image>
            <h3 className='lg:text-6xl md:text-5xl text-4xl md:mb-16 mb-12'>Ops! Page Not Found.</h3>
            <Btn text="Back To Home" link="/"></Btn>
        </div>
    );
};

export default NotFound;