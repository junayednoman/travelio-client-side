
import Btn from '@/components/Btn';
import MobileMenu from '@/components/MobileMenu';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='border-b bg-[#F8F9FA]'>
            <div className='py-2 text-primaryColor flex justify-between items-center xl:px-[130px] lg:px-16 md:px-10 px-3 border-b'>
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
            <div className='flex justify-between items-center xl:mx-[120px] lg:mx-16 md:mx-10 mx-3 py-5'>
                <div>
                    <Link href="/">
                        <h1 className='lg:text-5xl md:text-4xl text-3xl text-primaryColor'>Travelio</h1>
                    </Link>
                </div>
                <div className='items-center gap-10 lg:flex hidden'>
                    {
                        menuItems.map(item => <Link className='font-medium' key={item.label} href={item.url}>{item.label}</Link>)
                    }
                </div>
                <div className='lg:block hidden'>
                    <Btn text={"Book your stay"} link={"/"}></Btn>
                </div>
                <div className='lg:hidden block'>
                    <MobileMenu menuItems={menuItems}></MobileMenu>
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