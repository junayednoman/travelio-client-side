import Link from "next/link";
import facebookImg from "@/../../public/facebook.png"
import googleImg from "@/../../public/google.png"
import linkedinImg from "@/../../public/linkedin.png"
import twitterImg from "@/../../public/twitter.png"
import Image from "next/image";

const SocialLogin = ({ link, text, linkTxt }) => {
    return (
        <div className="mt-8">
            <div className="divider">OR</div>
            <div className="flex items-center gap-5 justify-center mt-9">
                <Image alt="icon" className="max-w-[35px] cursor-pointer" src={facebookImg}></Image>
                <Image alt="icon" className="max-w-[35px] cursor-pointer" src={googleImg}></Image>
                <Image alt="icon" className="max-w-[35px] cursor-pointer" src={linkedinImg}></Image>
                <Image alt="icon" className="max-w-[35px] cursor-pointer" src={twitterImg}></Image>
            </div>

            <p className="text-sm text-center mt-10">{text} <Link className="text-primaryColor font-medium underline capitalize" href={link}>{linkTxt}</Link></p>
        </div>
    );
};

export default SocialLogin;