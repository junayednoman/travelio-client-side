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
import SectionTitle from "@/components/SectionTitle";

const RoomDetails = () => {
    return (
        <div className="md:pt-16 pt-8">
            <Container>
                <div>
                    <div className="text-center">
                        <Image className="mx-auto rounded-sm text-center" src="https://i.postimg.cc/qMgXLqr9/2150897745.jpg" alt="image" preview></Image>
                        <h5 className="md:text-4xl text-3xl mt-5">Accessible Room</h5>
                        <h5 className="md:text-lg text-base md:mt-5 mt-2">From <span className="text-primaryColor font-semibold md:text-xl text-lg">$129.00</span> Per Night</h5>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-24 gap-6 md:mt-12 mt-7 md:w-full w-[160px] mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><LuUsers2 className="text-primaryColor text-2xl"></LuUsers2></div>
                            <div className="">
                                <p className="font-medium">3 Person</p>
                                <span className="text-sm text-gray-500">Capacity</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><GiThermometerScale className="text-primaryColor text-[26px]"></GiThermometerScale></div>
                            <div className="">
                                <p className="font-medium">250sqm</p>
                                <span className="text-sm text-gray-500">Size</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-4 rounded-full bg-[#F0EDEC]"><GrOverview className="text-primaryColor text-2xl"></GrOverview></div>
                            <div className="">
                                <p className="font-medium">City, Ocean</p>
                                <span className="text-sm text-gray-500">View</span>
                            </div>
                        </div>
                    </div>


                    {/* tab for showing other inco */}
                    <TabView className="mt-12">
                        <TabPanel header="Overview 🫰">
                            <div className="md:p-5 p-1 md:text-base text-sm">
                                <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque ipsa at natus velit, corporis, eaque nesciunt debitis, enim laborum inventore. Porro mollitia dolorum, labore cum earum totam eum vero nesciunt quasi ipsum omnis id quae neque excepturi voluptate deleniti.</p>

                                <p className="mb-3">Cum enim beatae nesciunt ullam doloribus minima laboriosam illo temporibus nemo quo! Maiores voluptas,  asperiores praesentium doloribus quam. Fugiat necessitatibus quam sunt temporibus et reprehenderit nam magni aut voluptatibus, consectetur, hic officiis obcaecati eaque debitis deleniti nostrum voluptates minus fuga architecto. Nihil, obcaecati necessitatibus sit consectetur modi reprehenderit veritatis voluptates natus ipsa, magnam eveniet iure officia ad sunt, vitae reiciendis. Repellendus perferendis tempora quis veritatis! Quos sequi repellat in natus harum fugiat quidem voluptatibus voluptas? Ipsam modi ab asperiores at sint dignissimos, assumenda autem consequuntur. Obcaecati repellat fugit ab repellendus impedit aliquam minima.  inventore saepe temporibus quasi. Voluptatem, necessitatibus. Consequatur est optio assumenda distinctio, ipsa labore dolorum inventore neque in recusandae quibusdam et eveniet consequuntur expedita nisi eaque quasi nesciunt accusamus illo nulla veniam placeat commodi. Necessitatibus nam repudiandae quod sint quidem </p>

                                <p className="mb-3">Reprehenderit earum dolorem pariatur quas obcaecati suscipit optio atque deserunt, aliquam sunt! Accusamus dolores dicta inventore alias rerum sint, itaque ipsa dolorum, repellat necessitatibus perferendis dignissimos</p>

                                <p className="mb-3">Officia voluptatum ullam est! Consequuntur possimus accusantium libero, voluptatem laborum eaque, odio ad recusandae quam iusto facere vero optio porro. Vel exercitationem ipsam libero officia? Animi.</p>


                                <p className="font-medium">Lorem, ipsum dolor:</p>
                                <ul className="list-disc ml-8">
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Nesciunt debitis</li>
                                    <li>Quasi ipsum</li>
                                    <li>Laborum inventore</li>
                                </ul>
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