import Link from "next/link"
import { FaSquareXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

function Hero() {

    return (
        <div className="bg-center bg-cover min-h-[60vh] custom-bg-image mb-5">
            <div className="flex flex-col justify-center align-center mx-auto h-100">
                <div className="bg-gray-50 text-indigo-950 rounded-md px-4 pt-10 mx-auto text-center min-h-[50%] min-w-[50%] shadow-xl border-indigo-950 border-1">
                    <p className='text-2xl py-2 font-semibold'>Welcome to My Awesome Blog</p>
                    <p className='text-xl pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nesciunt.</p>
                    <div className='text-2xl py-2 flex justify-center align-center'>
                        <p className='mx-2 hover:text-indigo-900'>
                            <Link href="/"><FaSquareXTwitter /></Link>
                        </p>
                        <p className='mx-2 hover:text-indigo-900'>
                            <Link href="/"><FaFacebook /></Link>
                        </p>
                        <p className='mx-2 hover:text-indigo-900'>
                            <Link href="/"><FaInstagram /></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero