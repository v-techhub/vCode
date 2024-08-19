import { DB } from "@/app/firebase/config"
import { Post as PostType } from "@/app/types/backend"
import { doc, getDoc } from "firebase/firestore"
import Image from "next/image"

async function getPost(id: string) {
    const ref = doc(DB, `posts/${id}`)
    const docSnap = await getDoc(ref)
    const postData = docSnap.data() as PostType
    return postData
}

const Post = async ({ params }: { params: any }) => {
    const post = await getPost(params.id)
    return (
        <div className="w-[70dvw] mx-auto">
            <Image
                src={post.thumbnail}
                alt="Post thumbnail"
                width={50}
                height={50}
                priority
                className="w-[60%] mx-auto h-[200px] object-cover rounded-lg shadow-lg"
            />
            <section>
                <h2 className="font-bold text-xl text-center my-5">{post.title}</h2>
                <p className="tracking-wide">{post.description}</p>
                <div className="bg-slate-300 rounded-md p-1 text-[12px] w-fit">
                    #{post.category}
                </div>
                <div className="my-5">
                    <div className="flex gap-2 items-center mb-2">
                        <Image
                            src={post.authorImgUrl}
                            width={50}
                            height={50}
                            alt="Author Image"
                            className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <em>from {post.author}</em>
                    </div>
                    <p>{post.authorRole}</p>
                </div>
            </section>
        </div>
    )
}

export default Post