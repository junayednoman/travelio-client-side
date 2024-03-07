import "./globals.css";
import { Heebo } from "next/font/google"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AuthContextProvider from "@/authContextProvider/AuthContextProvider";
import 'react-toastify/dist/ReactToastify.css';

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: "Stavelio - Book your stay",
  description: "Stavelio - Book your stay",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body" className={heebo.className}>
        <AuthContextProvider>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
