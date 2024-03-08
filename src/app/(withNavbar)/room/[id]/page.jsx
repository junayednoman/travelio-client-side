import Container from "@/components/Container";
import { Image } from 'primereact/image';
import { TabPanel, TabView } from "primereact/tabview";
import { FaCreditCard } from "react-icons/fa";
import { GiThermometerScale } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { GiMedievalPavilion } from "react-icons/gi";
import { FaConciergeBell } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSmoking } from "react-icons/fa6";
import Newsletter from "@/app/sections/Newsletter";
import BookingForm from "@/components/BookingForm";
import getSingleRoom from "../../../../../lib/getSingleRoom";

const RoomDetails = async ({ params }) => {
    const room = await getSingleRoom(params?.id);
    const { name, image, price, description, capacity, size, view, room_views } = room;

    return (
        <div className="md:pt-16 pt-8">
            <Container>
                <div>
                    <div className="text-center">
                        <Image className="mx-auto rounded-sm text-center" src={image} alt="image" preview></Image>
                        <h5 className="md:text-4xl text-3xl mt-5">{name}</h5>
                        <h5 className="md:text-lg text-base md:mt-5 mt-2">From <span className="text-primaryColor font-semibold md:text-xl text-lg">${price}</span> Per Night</h5>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-24 gap-6 md:mt-12 mt-7 md:w-full w-[160px] mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><LuUsers2 className="text-primaryColor text-2xl"></LuUsers2></div>
                            <div className="">
                                <p className="font-medium">{capacity} Person</p>
                                <span className="text-sm text-gray-500">Capacity</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><GiThermometerScale className="text-primaryColor text-[26px]"></GiThermometerScale></div>
                            <div className="">
                                <p className="font-medium">{size}sqm</p>
                                <span className="text-sm text-gray-500">Size</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><GrOverview className="text-primaryColor text-2xl"></GrOverview></div>
                            <div className="">
                                <p className="font-medium">{view}</p>
                                <span className="text-sm text-gray-500">View</span>
                            </div>
                        </div>
                    </div>


                    {/* tab for showing other inco */}
                    <TabView className="mt-12">
                        <TabPanel header="Overview 🫰">
                            <div className="md:p-5 p-1 md:text-base text-sm">
                                <p>{description}</p>
                            </div>
                        </TabPanel>
                        <TabPanel header="Features ✨">
                            <div className="md:p-5 p-1 md:text-base text-sm">
                                <h5 className="md:text-2xl text-xl font-medium">Key Features</h5>
                                <div className="grid md:grid-cols-3 grid-cols-2 justify-between mt-6 gap-6">
                                    <p className="flex items-center gap-2">
                                        <FaCreditCard className="text-2xl text-primaryColor"></FaCreditCard>
                                        <span>Accepts Credit Cards</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MdOutlineLocalLaundryService className="text-2xl text-primaryColor"></MdOutlineLocalLaundryService>
                                        <span>Laundry Service</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <GiMedievalPavilion className="text-2xl text-primaryColor"></GiMedievalPavilion>
                                        <span>Outdoor Seating</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaConciergeBell className="text-2xl text-primaryColor"></FaConciergeBell>
                                        <span>Reservations</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <IoFastFoodOutline className="text-2xl text-primaryColor"></IoFastFoodOutline>
                                        <span>Free Lunch</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaSmoking className="text-2xl text-primaryColor"></FaSmoking>
                                        <span>Smoking Allowed</span>
                                    </p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Reviews 📃">
                            <p className="m-0 md:p-5 p-1 font-medium md:text-xl text-lg text-gray-500">
                                No Data To Show
                            </p>
                        </TabPanel>
                    </TabView>

                    {/* form for booking room */}
                    <BookingForm></BookingForm>

                </div>
            </Container>
            {/* news letter section */}
            <div className="md:mt-20 mt-14">
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default RoomDetails;