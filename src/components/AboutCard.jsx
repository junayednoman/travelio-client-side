import Image from "next/image";

const AboutCard = ({ heading, description, icon }) => {
    return (
        <div className="p-6 bg-[#ffffff] h-full">
            <Image className="mb-4" width={50} src={icon} alt="icon"></Image>
            <h5 className="text-[22px]">{heading}</h5>
            <p className="mt-2">{description}</p>
        </div>
    );
};

export default AboutCard;