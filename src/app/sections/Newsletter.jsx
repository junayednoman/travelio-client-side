import Container from "@/components/Container";
import Image from "next/image";
import bg from "@/../public/newsletter-bg.jpg"
const Newsletter = () => {
    return (
        <div className="relative bg-center bg-cover bg-no-repeat">
            <div className="md:py-32 py-20 bg-[#55372fbe]">
                <Container>
                    <div className="text-center text-white md:mb-10 mb-6">
                        <h5 className="md:text-4xl uppercase text-[28px] font-semibold mb-4">Subscribe to Our Newsletter</h5>
                        <p className="md:text-lg text-sm">Stay up-to-date with our latest promotions, exclusive offers, <br className="md:block hidden" /> and hotel news by subscribing to our newsletter.</p>
                    </div>
                    <form className="">
                        <div className="flex items-center justify-center">
                            <input className="border border-white border-r-0 pl-4 py-3 md:w-[350px] w-[300px]" type="email" placeholder="Enter your email" />
                            <input className="border px-6 py-3 border-white bg-primaryColor text-white cursor-pointer " type="submit" value="Subscribe" />
                        </div>
                    </form>
                </Container>
            </div>
            <Image src={bg} alt="newsletter bg" fill={true} className="object-cover -z-50"></Image>
        </div>
    );
};

export default Newsletter;