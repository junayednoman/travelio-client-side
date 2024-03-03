import Banner from "./sections/Banner";
import CheckAvailability from "./sections/CheckAvailability";
import GridPromo from "./sections/GridPromo";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <CheckAvailability></CheckAvailability>
      <GridPromo></GridPromo>
    </main>
  );
}