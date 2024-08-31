import { ref, listAll } from "firebase/storage";
import { storage } from "@/app/firebase/config"
import Card from "./card";

const listRef = ref(storage, 'resources');

const getResources = async () => {
    const data: string[] = []
    const res = await listAll(listRef)
    res.items.forEach(item => {
        data.push(item.name)
    })
    return data
}

const Resources = async () => {
    const listOfResources = await getResources()
    return (
        <section>
            <header className="p-3 text-center">
                Download useful materials to enhance your growth, ALL FOR FREE
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