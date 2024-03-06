import symble from "@/../public/luxuru-symble.png"
import Image from "next/image";

const SectionTitle = ({ heading, align }) => {
    return (
        <div className='md:mb-10 mb-7' style={{ textAlign: align ? align : 'center' }}>
            <h5 className='md:text-4xl text-[28px] font-semibold capitalize'>{heading}</h5>
            <div className="mx-auto md:mt-2 mt-1 md:w-[130px] w-[130px]">
                <Image src={symble} alt="symble"></Image>
            </div>
        </div>
    );
};

export default SectionTitle;