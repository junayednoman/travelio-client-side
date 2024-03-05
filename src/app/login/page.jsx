import SocialLogin from "@/components/SocialSignIn";

const Login = () => {
    return (
        <div className="lg:h-screen h-auto lg:my-0 my-12 flex justify-center items-center md:mx-0 mx-3">
            <div className="md:p-16 p-10 md:px-20 px-8 rounded-sm bg-[#F0EDEC] w-[700px] mx-auto">
                <h5 className="text-3xl mb-2">SIGN IN</h5>
                <p>Enter your email and password to login</p>
                <form className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="email">Email*</label><br />
                        <input className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your email" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password*</label><br />
                        <input className="border focus:outline-primaryColor mt-1 border-[#00000061] w-full h-[44px] rounded-sm pl-4" placeholder="Enter your password" id="password" type="password" />
                    </div>
                    <input type="submit" value="Login" className="h-[45px] rounded-sm bg-primaryColor text-white capitalize border border-[#55372F] hover:bg-transparent hover:text-primaryColor duration-200 text-center cursor-pointer w-full mt-2" />
                </form>
                <SocialLogin link="/sign-up" text="Don not have an account?" linkTxt="Sign Up"></SocialLogin>
            </div>
        </div>
    );
};

export default Login;