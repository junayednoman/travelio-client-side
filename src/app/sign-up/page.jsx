"use client"
import SocialLogin from "@/components/SocialSignIn";
import useAuthInfo from "../../../lib/useAuthInfo";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import loadingImg from '@/../public/loading.gif'
import Image from "next/image";

const SignUp = () => {
    const { signUp, loading, user } = useAuthInfo();
    const { register, handleSubmit } = useForm();
    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <Image width={150} src={loadingImg} alt="loading image"></Image>
        </div>
    }
    if (user) {
        return window.location = ('/');
    }
    const handleSignUp = (data) => {
        signUp(data?.email, data?.password)
            .then(res => {
                if (res?.user) {
                    toast.success("User has created successfully");
                    window.location = ('/');
                    window.location.replace('/');
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    return (
        <div className="lg:h-screen h-auto lg:my-0 my-12 flex justify-center items-center md:mx-0 mx-3">
            <div className="md:p-16 p-10 md:px-20 px-8 rounded-sm bg-[#F0EDEC] w-[700px] mx-auto">
                <h5 className="text-3xl mb-2">SIGN UP</h5>
                <p>Enter required information to sign up</p>
                <form onSubmit={handleSubmit(handleSignUp)} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="name">Name*</label><br />
                        <input {...register("name")} className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email*</label><br />
                        <input {...register("email")} className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter you email" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password*</label><br />
                        <input {...register("password")} className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter a password" id="password" type="password" />
                    </div>
                    <input type="submit" value="Sign Up" className="h-[45px] rounded-sm bg-primaryColor text-white capitalize border border-[#55372F] hover:bg-transparent hover:text-primaryColor duration-200 text-center cursor-pointer w-full mt-2" />
                </form>
                <SocialLogin link="/login" text="Already have an account?" linkTxt="Login"></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default SignUp;