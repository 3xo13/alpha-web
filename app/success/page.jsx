import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';

const success = () => {
  return (
    <div key={uuidv4()} className="screen h-screen flex flex-col items-center justify-center ">
      <h1 className="mb-5 capitalize text-5xl text-yellow-600/90">Thank you for contacting Alpha limit</h1>
      <h3 className="mb-5 capitalize text-3xl black">your email has been sent</h3>
      <p className="mb-5 capitalize text-2xl black">We will get back to you as soon as possible</p>
      <Link key={uuidv4()} href="/">
        <button className="mb-5 capitalize text-2xl  bg-yellow-400 p-2 hove:bg-yellow-600/80 
        hover:text-gray-300 rounded-xl drop-shadow-2xl">Go back home</button>
      </Link>
    </div>
  )
}

export default success