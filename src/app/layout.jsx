import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { Heebo } from "next/font/google"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: "Travelio - Book your stay",
  description: "Travelio - Book your stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <PrimeReactProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
