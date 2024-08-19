import { DB } from "@/app/firebase/config"
import { Post as PostType } from "@/app/types/backend"
import { doc, getDoc } from "firebase/firestore"

export const getServerSideProps = async (context: any) => {
    const id = context.params.id
    const ref = doc(DB, `posts/${id}`)
    const docSnap = await getDoc(ref)
    const postData = docSnap.data()

    return { props: { post: postData } }
}

interface PostProps {
    post: PostType
}

const Post = ({ post }: PostProps) => {
    console.log(post)
    return "Post"
}

export default Post