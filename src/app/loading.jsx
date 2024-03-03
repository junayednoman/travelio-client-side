import Image from 'next/image';
import loadingimg from "../../public/loading.gif"

const loading = () => {
    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <Image width={130} src={loadingimg} alt='Loading img'></Image>
        </div>
    );
};

export default loading;