"use client"
import { MyContext } from "@/authContextProvider/AuthContextProvider";
import { useContext } from "react";

const useAuthInfo = () => {
    const authInfo = useContext(MyContext);
    return (
        authInfo
    );
};

export default useAuthInfo;