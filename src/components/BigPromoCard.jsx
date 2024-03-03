import SecondaryBtn from "./SecondaryBtn";


const BigPromoCard = ({ bg, heading, subHeading, btnText, btnLink }) => {
    return (
        <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
            <div className="md:p-12 p-8 bg-[#0000006b] text-white xl:pt-44 pt-32 md:pb-16 pb-12">
                <h5 className="text-xl font-medium">{subHeading}</h5>
                <h3 className="my-3 mb-12 md:text-2xl text-[22px] xl:mr-44  font-medium">{heading}</h3>
                <SecondaryBtn text={btnText} link={btnLink}></SecondaryBtn>
            </div>
        </div>
    );
};

export default BigPromoCard;