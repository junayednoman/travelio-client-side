import Image from "next/image";
import quote from "@/../public/quote.png"
import { Rating } from "primereact/rating";

const TestimonialCard = ({ name, image, rating, text }) => {
    return (
        <div className="p-5 py-7 text-center border rounded-sm border-[#55372f28] hover:border-[#55372fb7] duration-300 hover:bg-[#55372f17] testiCard">
            <Image className="mx-auto rounded-full testiImg border border-white duration-300" width={80} height={1} src={image} alt="avatar"></Image>
            <h5 className="text-xl my-4">{name}</h5>
            <div className="mb-3">
                <Rating className="justify-center text-red-500" value={rating} readOnly cancel={false} />
            </div>
            <p className="italic mt-4 mb-3">"{text}"</p>
            <Image className="mx-auto" width={60} src={quote} alt="quote"></Image>
        </div>
    );
};

export default TestimonialCard;