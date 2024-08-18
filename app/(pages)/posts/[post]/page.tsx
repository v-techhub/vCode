import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const Post = (params: Params) => {
    console.log(params)
    return "Post"
}

export default Post