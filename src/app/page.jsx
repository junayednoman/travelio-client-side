import Banner from "./sections/Banner";
import CheckAvailability from "./sections/CheckAvailability";
import FeaturedRooms from "./sections/FeaturedRooms";
import GridPromo from "./sections/GridPromo";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <CheckAvailability></CheckAvailability>
      <GridPromo></GridPromo>
      <FeaturedRooms></FeaturedRooms>
    </main>
  );
}