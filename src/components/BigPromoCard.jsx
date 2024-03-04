import SecondaryBtn from "./SecondaryBtn";


const BigPromoCard = ({ bg, heading, subHeading, btnText, btnLink }) => {
    return (
        <div className="overflow-hidden cursor-pointer">
            <div className=" bg-cover bg-center bg-no-repeat hover:scale-105 duration-500 promoCard" style={{ backgroundImage: `url(${bg})` }}>
                <div className="md:p-12 p-8 bg-[#00000031] hover:bg-[#00000080] duration-500 text-white xl:pt-[280px] lg:pt-[200px] md:pt-[300px] pt-[200px] md:pb-5 pb-1 ">
                    <div className="promoText duration-500">
                        <h5 className="text-xl font-medium">{subHeading}</h5>
                        <h3 className="my-3 mb-0 md:text-2xl text-[22px] xl:mr-44 font-medium">{heading}</h3>
                    </div>
                    <div className="promoBtn duration-500">
                        <SecondaryBtn text={btnText} link={btnLink}></SecondaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigPromoCard;