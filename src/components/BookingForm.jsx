"use client"
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuthInfo from "../../lib/useAuthInfo";
import { ToastContainer, toast } from "react-toastify";

const BookingForm = ({ id }) => {
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const { user } = useAuthInfo();
    const { register, handleSubmit } = useForm();
    console.log(user);
    const handleBooking = (data) => {
        data.checkInDate = new Date(checkInDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        data.checkOutDate = new Date(checkOutDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        data.name = user?.displayName;
        data.email = user?.email;
        data.photoUrl = user?.photoURL;
        data.room_id = id
        axios.post("http://localhost:5000/api/bookings", data)
            .then(res => {
                // console.log(res.data);
                if (res?.data.insertedId) {
                    axios.patch(`http://localhost:5000/api/rooms/${id}`, { available: false })
                        .then(res => {
                            if (res.data.modifiedCount === 1) {
                                toast.success("Room booked successfully!");
                            }
                        }).catch(err => {
                            toast.error(err.message);
                        })
                }
            }).catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className="md:mt-16 mt-10">
            <SectionTitle heading="book this room"></SectionTitle>
            <form onSubmit={handleSubmit(handleBooking)} className="-mt-3">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-5 gap-y-2">

                    <div className="mb-3">
                        <label htmlFor="phone">Phone*</label><br />
                        <input {...register("phone")} className="border appearance-none focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your phone number" id="phone" type="number" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="guest">Guests*</label><br />
                        <input {...register("guests")} className="border appearance-none focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter guest number" id="guest" type="number" />
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookingForm;