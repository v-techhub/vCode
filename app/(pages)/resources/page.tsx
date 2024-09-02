"use client"

import { ref, listAll } from "firebase/storage";
import { storage } from "@/app/firebase/config"
import Card from "./card";
import { useState, useEffect } from "react"

const Resources = () => {
    const listRef = ref(storage, 'resources');
    const [listOfResources, setListOfResources] = useState<string[]>([])

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await listAll(listRef)
                let data: string[] = []
                res.items.forEach(item => {
                    if (item) {
                        data.push(item.name)
                        setListOfResources(data)
                    }
                })
            } catch (err) {
                console.error(err)
            }
        }
        fetchResources()
    }, [])


    return (
        <section>
            <header className="p-3 text-center">
                Download useful materials to enhance your growth, <strong>ALL FOR FREE</strong>
            </header>
            <fieldset className="flex flex-wrap gap-3 md:gap-5 justify-center max-w-[90dvw] md:max-w-[70%] mx-auto mt-10 px-10">
                {listOfResources?.map((item, itemIdx) => (
                    <Card key={itemIdx} item={item} />
                ))}
            </fieldset>
        </section>
    )
}

export default Resources