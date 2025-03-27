import Image from "next/image"
import Link from "next/link"
import { FaThumbsUp } from "react-icons/fa6"

function BlogCard() {
    return (
        <div className="rounded-md border-2 border-indigo-950 shadow-lg shadow-gray-500/50 bg-gray-50">
            <Image
                contain="true"
                src="/images/heroimage.jpg"
                alt="blog card picture"
                width={400}
                height={400}
                className="rounded-t-sm"
            />
            <div className="py-4 px-2">
                <p className="font-semibold text-xl pb-1">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="text-base italic">Written By: Author Name </p>
                <p className="text-lg py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Et assumenda perspiciatis magni quasi voluptas odit architecto itaque,
                    quidem repellat quisquam?
                </p>
            </div>
            <div className="px-2 pb-4 flex justify-between align-center">
                <Link
                    href="/blog/2"
                    className="p-2 bg-indigo-950 text-gray-50 rounded-sm cursor-pointer hover:bg-indigo-900"
                >
                    View Blog
                </Link>
                <button className="p-2 bg-pink-950 text-gray-50 rounded-sm flex justify-center align-center cursor-pointer hover:bg-indigo-900">
                    <span className="mr-2 pt-1"><FaThumbsUp /></span>
                    Like
                </button>
            </div>

        </div>
    )
}

export default BlogCard