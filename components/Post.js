import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import CategoryLabel from "./CategoryLabel"

export default function Post({ post }) {
    const router = useRouter()

    const blogPage = () => {
        router.push(`/blog/${post.slug}`)
    }

    return (
        <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
            <Image src={post.frontmatter.cover_image} alt="" height={420} width={600} className="mb-4 rounded" />

            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">
                    {post.frontmatter.date}
                </span>
                <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>

            <div className="mt-2">
                <Link href='#'>
                    <a className="text-2xl text-gray-700 font-bold hover:underline" onClick={blogPage}>
                        {post.frontmatter.title}
                    </a>
                </Link>
                <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href='#'>
                    <a className="text-gray-900 hover:text-blue-600" onClick={blogPage}>
                        Read More
                    </a>
                </Link>
                <div className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.frontmatter.author_image} alt="" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"/>
                    <h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
                </div>
            </div>
        </div>
    )
}
