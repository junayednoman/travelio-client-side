"use client"
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from 'react';

const CheckAvailability = () => {
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [guests, setGuests] = useState();
    return (
        <div className='max-w-5xl bg-white md:px-16 px-3 py-8 mx-auto xl:shadow-md xl:-mt-16'>
            <form className='grid lg:grid-cols-4 md:grid-cols-2 items-center md:gap-6 gap-4'>
                <div>
                    <label htmlFor="checkin" className="font-bold block mb-2">Check In</label>
                    <Calendar className='w-full' id='checkin' placeholder='Check in date' value={checkInDate} onChange={(e) => setCheckInDate(e.value)} showIcon />
                </div>
                <div>
                    <label htmlFor="checkout" className="font-bold block mb-2">Check Out</label>
                    <Calendar className='w-full' id='checkout' placeholder='Check out date' value={checkOutDate} onChange={(e) => setCheckOutDate(e.value)} showIcon />
                </div>
                <div>
                    <label  className="font-bold block mb-2">Guests</label>
                    <InputNumber id="guest" className='w-full' placeholder='EX: 3' value={guests} onValueChange={(e) => setGuests(e.value)} min={0} max={30} />
                </div>
                <div className='md:mt-0 mt-2'>
                    <label className="font-bold md:block hidden mb-2 invisible">Guests</label>
                    <input type="submit" value="Check Availability" className='bg-primaryColor border border-primaryColor hover:bg-transparent hover:text-primaryColor duration-200 text-white rounded-sm h-[44px] w-full cursor-pointer' />
                </div>
            </form>
        </div>
    );
};

export default CheckAvailability;