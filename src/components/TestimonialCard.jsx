import Image from "next/image";
import quote from "@/../public/quote.png"
import { Rating } from "primereact/rating";

const TestimonialCard = ({ name, image, rating, text }) => {
    return (
        <div className="p-5 py-7 text-center border rounded-sm">
            <Image className="mx-auto" width={80} height={1} src={image} alt="avatar"></Image>
            <h5 className="text-2xl my-4">{name}</h5>
            <div className="mb-3">
                <Rating className="justify-center text-red-500" value={rating} readOnly cancel={false} />
            </div>
            <p className="italic my-1 mb-3">{text}</p>
            <Image className="mx-auto" width={60} src={quote} alt="quote"></Image>
        </div>
    );
};

export default TestimonialCard;