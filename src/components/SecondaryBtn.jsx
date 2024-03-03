import Link from 'next/link';

const SecondaryBtn = ({ text, link }) => {
    return (
        <>
            <Link className='px-6 py-3 bg-[#482924] text-white capitalize border border-[#482924] hover:bg-transparent hover:text-white hover:border-white duration-200' href={link}>{text}</Link>
        </>
    );
};

export default SecondaryBtn;