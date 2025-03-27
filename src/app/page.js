import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import NewsLetterForm from "@/components/NewsLetterForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <Hero />

      <div className="mx-auto w-[95%] flex justify-between align-base px-2">
        <p className="text-2xl py-2 text-indigo-950">Latest Blogs</p>
        <p className="p-2 text-lg text-blue-900"><Link className="underline italic" href="/blogs">View all Blogs</Link></p>
      </div>

      <BlogList />

      <NewsLetterForm />
    </div>
  );
}
