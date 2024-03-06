import Container from '@/components/Container';
import Link from 'next/link';
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='bg-[#F0EDEC] xl:px-[130px] lg:px-16 md:px-10 px-3'>
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <Link href="/">
                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-primaryColor'>Stavelio</h1>
                        </Link>
                        <p className='mt-2'>Copyright © 2024 Stavelio. All rights reserved.</p>
                        <ul className='space-y-3 mt-4'>
                            <li className='flex items-center gap-2'><AiOutlineMail className='text-lg'></AiOutlineMail><span>contact@stavelio.com</span></li>
                            <li className='flex items-center gap-2'><i className="pi pi-phone"></i><span>+880 13453453</span></li>
                        </ul>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Rooms</h6>
                        <a className="link link-hover">Double CLassic Suite</a>
                        <a className="link link-hover">Forest View Room</a>
                        <a className="link link-hover">Ocean Loft</a>
                        <a className="link link-hover">Family Room</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Career</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
        </div>
    );
};

export default Footer;