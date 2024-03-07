import Image from 'next/image';
import loadingimg from "../../public/loading.gif"

const loading = () => {
    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <Image width={150} src={loadingimg} alt='Loading img'></Image>
        </div>
    );
};

export default loading;