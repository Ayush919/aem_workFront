import { Inter } from 'next/font/google'
import {SignInSignUpModal} from "@/pages/login";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  const [loginData, setLoginData] = useState({})
  return (
    <>
      <SignInSignUpModal showModal={showModal} setShowModal={setShowModal}
                         loginData={loginData}
                         setLoginData={setLoginData}/>
    </>
  )
}
