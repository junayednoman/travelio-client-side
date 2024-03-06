"use client"
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const BookingForm = () => {
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    return (
        <div className="md:mt-16 mt-10">
            <SectionTitle heading="book this room"></SectionTitle>
            <form className="-mt-3">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-5 gap-y-2">
                    <div className="mb-3">
                        <label htmlFor="name">Name*</label><br />
                        <input className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your name" id="name" type="text" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email*</label><br />
                        <input className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your email" id="email" type="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone">Phone*</label><br />
                        <input className="border appearance-none focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your phone number" id="phone" type="number" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="guest">Guests*</label><br />
                        <input className="border appearance-none focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter guest number" id="guest" type="number" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="checkin" className="block mb-2">Check In</label>
                        <Calendar className='w-full border-primaryColor' id='checkin' placeholder='Check in date' value={checkInDate} onChange={(e) => setCheckInDate(e.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="checkout" className="block mb-2">Check Out</label>
                        <Calendar className='w-full border-primaryColor' id='checkout' placeholder='Check out date' value={checkOutDate} onChange={(e) => setCheckOutDate(e.value)} />
                    </div>

                </div>

                <input type="submit" value="Book Now" className="h-[45px] rounded-sm bg-primaryColor text-white capitalize border border-[#55372F] hover:bg-transparent hover:text-primaryColor duration-200 text-center cursor-pointer w-full mt-2" />
            </form>
        </div>
    );
};

export default BookingForm;