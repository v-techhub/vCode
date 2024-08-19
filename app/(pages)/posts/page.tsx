import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { collection, getDocs, query } from "firebase/firestore"
import { DB } from "../../firebase/config"
import { Post } from "@/app/types/backend"
// import { format } from "date-fns"

async function fetchPosts() {
    let postsArr = [] as Post[]
    try {
        const q = query(collection(DB, "posts"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
            postsArr.push(doc.data() as Post)
        })
    } catch (err) {
        console.error(err)
    }
    return postsArr
}

export const generateMetadata = (): Metadata => ({
    title: "posts",
    description: "post listings",
    keywords: "blog, posts"
})

export default async function Posts() {
    const posts = await fetchPosts()
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        See exiting posts from the owner here.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts?.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <Image
                                priority
                                src={post.thumbnail}
                                className="w-full rounded-lg object-contain mb-1"
                                width={100}
                                height={100}
                                alt="Blog Thumbnail"
                            />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                    {/* {post.createdAt.seconds} */}Aug 14, 2024
                                </time>
                                {post.category}
                            </div>
                            <div className="group relative">
                                <Link href={`posts/${post.id}`}>
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <Image
                                    alt="author image"
                                    width={100}
                                    height={100}
                                    priority
                                    src={post.authorImgUrl}
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        {post.author}
                                    </p>
                                    <p className="text-gray-600">{post.authorRole}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
