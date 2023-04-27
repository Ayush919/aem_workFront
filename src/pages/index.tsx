import {Inter} from 'next/font/google'
import {SignInSignUpModal} from "@/pages/login";
import {useEffect, useState} from "react";
import HomeSection from "@/pages/homeSection";
import {toast} from "react-toastify";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [loginData, setLoginData] = useState({})
    const [loginResponse, setLoginResponse] = useState({})

    return (
        <>
            {Object.keys(loginResponse).length == 0 ?
                <SignInSignUpModal
                    loginData={loginData}
                    setLoginData={setLoginData}
                    setLoginResponse={setLoginResponse}/>
                : <HomeSection/>}
        </>
    )
}
