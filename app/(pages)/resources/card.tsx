"use client"

import { storage } from "@/app/firebase/config"
import { getDownloadURL, ref } from "firebase/storage"
import Link from "next/link"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog"

const Card = ({ item }: { item: string }) => {
    const [downloadUrl, setDownloadUrl] = useState('')

    const downloadFile = async (path: string) => {
        const url = await getDownloadURL(ref(storage, `resources/${path}`))
        setDownloadUrl(url)
    }
    return (
        <Dialog>
            <div onClick={() => downloadFile(item)} className="border w-fit h-10 p-2 rounded-3xl flex items-center justify-center hover:shadow-xl transition-all duration-300">
                {item}
                <DialogTrigger className="text-green-500 px-3 py-2 rounded-sm mx-2 active:scale-90 transition-all duration-500 hover:scale-110 cursor-pointer">GET</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Download</DialogTitle>
                        <DialogDescription>
                            <p className="tracking-tight">Are you absolutely sure you want to get {item}?</p>
                            <Link href={downloadUrl} className="text-indigo-500 text-underline" download>click here to dowload</Link>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </div>
        </Dialog>
    )
}

export default Card