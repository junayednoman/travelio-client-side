"use client"
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const MobileMenu = ({ menuItems }) => {
    const [mobileMenuVisibleBottom, setMobileMenuVisibleBottom] = useState(false);
    return (
        <div>
            <button onClick={() => setMobileMenuVisibleBottom(true)} className=""><i className="pi pi-bars text-2xl"></i></button>
            <Sidebar className="h-screen bg-primaryColor" visible={mobileMenuVisibleBottom} position="top" onHide={() => setMobileMenuVisibleBottom(false)}>
                <div className="text-center flex justify-center items-center flex-col mt-20">
                    {
                        menuItems.map(item => <div key={item.label} className="mb-5"><Link onClick={() => setMobileMenuVisibleBottom(false)} className='md:text-3xl text-2xl font-light' href={item.url}>{item.label}</Link></div>)
                    }
                </div>
            </Sidebar>
        </div>
    );
};

export default MobileMenu;