import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function WithNavbarLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
