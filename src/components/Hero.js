import Link from "next/link"
import { FaSquareXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

function Hero() {

    return (
        <div className="bg-center bg-cover min-h-[60vh] custom-bg-image">
            <div className="flex flex-col justify-center align-center mx-auto h-100">
                <div className="bg-violet-50 text-violet-950 rounded-md px-4 pt-10 mx-auto text-center min-h-[50%] min-w-[50%]">
                    <p className='text-2xl py-2'>Welcome to My Awesome Blog</p>
                    <p className='text-xl pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nesciunt.</p>
                    <div className='text-xl py-2 flex justify-center align-center'>
                        <p className='mx-2 hover:text-violet-900'>
                            <Link href="/"><FaSquareXTwitter /></Link>
                        </p>
                        <p className='mx-2 hover:text-violet-900'>
                            <Link href="/"><FaFacebook /></Link>
                        </p>
                        <p className='mx-2 hover:text-violet-900'>
                            <Link href="/"><FaInstagram /></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero