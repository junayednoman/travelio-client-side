import symble from "@/../public/luxuru-symble.png"
import Image from "next/image";

const SectionTitle = ({ heading }) => {
    return (
        <div className='md:mb-10 mb-4 text-center'>
            <h5 className='md:text-4xl text-[28px] font-semibold'>{heading}</h5>
            <div className="mx-auto md:mt-2 mt-1 md:w-[200px] w-[150px]">
                <Image src={symble} alt="symble"></Image>
            </div>
        </div>
    );
};

export default SectionTitle;