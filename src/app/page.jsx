
import About from "./sections/About";
import Banner from "./sections/Banner";
import CheckAvailability from "./sections/CheckAvailability";
import FeaturedRooms from "./sections/FeaturedRooms";
import Footer from "./sections/Footer";
import GridPromo from "./sections/GridPromo";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import Testimonial from "./sections/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <CheckAvailability></CheckAvailability>
      <GridPromo></GridPromo>
      <FeaturedRooms></FeaturedRooms>
      <About></About>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </main>
  );
}