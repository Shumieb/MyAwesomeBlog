import BlogCard from "./BlogCard"

function BlogList() {
    return (
        <section className="w-[95%] mx-auto grid grid-cols-4 gap-x-4 gap-y-10 mb-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
    )
}

export default BlogList