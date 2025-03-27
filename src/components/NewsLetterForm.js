'use client'

import { useState } from "react"

function NewsLetterForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit mews letter form")
    }

    return (
        <section className="bg-indigo-950 text-gray-50 px-4 py-10 shadow-xl shadow-indigo-500/50">
            <div className="text-center">
                <form
                    className="text-lg"
                    onSubmit={handleSubmit}
                >
                    <p className="py-1">Want to stay up to date with Awesome Blogs?</p>
                    <p>Sign Up for my Awesome Newsletter</p>
                    <div className="py-6 flex justify-center align-center">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={setEmail}
                            placeholder="Email"
                            className="bg-gray-50 text-indigo-950 rounded-sm p-2 focus:outline-indigo-900 mr-4 min-w-70"
                        />
                        <button
                            className="p-2 text-indigo-950 bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-100 font-bold"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default NewsLetterForm