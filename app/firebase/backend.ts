import { collection, getDocs, query } from "firebase/firestore"
import { DB } from "./config"
import { Post } from "../types/backend"

export async function fetchPosts() {
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