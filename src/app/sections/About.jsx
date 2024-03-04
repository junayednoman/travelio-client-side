import AboutCard from "@/components/AboutCard";
import Container from "@/components/Container";
import SecondaryBtn from "@/components/SecondaryBtn";
import comfort from "@/../public/convenient2.png"
import convenient from "@/../public/convenience.png"
import personalized from "@/../public/gear.png"
import innovation from "@/../public/innovation.png"

const About = () => {
    const aboutOptions = [
        {
            "id": 1,
            "heading": "Exceptional Comfort",
            "description": "Indulge in luxurious rooms designed for utmost comfort and relaxation.",
            "icon": comfort
        },
        {
            "id": 2,
            "heading": "Convenient Service",
            "description": "Experience seamless hospitality in a prime location with easy access to attractions.",
            "icon": convenient
        },
        {
            "id": 3,
            "heading": "Personalized Service",
            "description": "Enjoy personalized attention from our dedicated staff for a memorable stay.",
            "icon": personalized
        },
        {
            "id": 4,
            "heading": "Modern Amenities",
            "description": "Explore state-of-the-art facilities tailored for your comfort and convenience.",
            "icon": innovation
        }
    ]

    return (
        <div className="bg-[url(https://i.postimg.cc/pL9nsLd6/7041365-416.jpg)] bg-center bg-cover bg-no-repeat bg-fixed md:mb-20 mb-12">
            <div className="lg:py-32 md:py-24 py-16 bg-[#55372fe0]">
                <Container>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                        <div className="lg:mr-10 mr-0">
                            <p className="text-2xl text-white">Our Story</p>
                            <div className="h-[2px] w-[70px] bg-white my-3 mt-4 ml-1"></div>
                            <h5 className="md:text-[50px] text-[38px] md:leading-[60px] leading-[50px] text-white capitalize">Behind Our Passion <br /> for Hospitality</h5>
                            <p className="text-white mt-4 mb-8 md:mb-12 md:text-lg text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sed omnis inventore error iusto, reprehenderit corporis mollitia quam obcaecati beatae repellat quia quo dolore! Earum, sit voluptates. Nesciunt quo fugit obcaecati quibusdam veniam laudantium veritatis dignissimos ducimus unde illo labore non.</p>
                            <SecondaryBtn text="Learn More" link="/about"></SecondaryBtn>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:mt-0 mt-12 md:mt-14">
                            {
                                aboutOptions.map(option =>
                                    <div key={option.heading}><AboutCard heading={option.heading} description={option.description} icon={option.icon}></AboutCard></div>
                                )
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;