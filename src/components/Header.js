import Link from "next/link"

function Header() {
    return (
        <header className="mb-5 flex justify-between align-center p-2 bg-violet-950 text-white">
            <p className="text-2xl py-2 hover:text-violet-100"><Link href="/">My Awesome Blog</Link></p>
            <nav className="py-2 px-6">
                <ul className="flex justify-end align-center">
                    <li className="mx-4 hover:text-violet-100 text-lg">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="mx-4 hover:text-violet-100 text-lg">
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li className="mx-4 hover:text-violet-100 text-lg">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header