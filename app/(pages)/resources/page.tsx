import { ref, listAll } from "firebase/storage";
import { storage } from "@/app/firebase/config"
import Card from "./card";

const Resources = async () => {
    const listRef = ref(storage, 'resources');
    const data: string[] = []
    const res = await listAll(listRef)
    res.items.forEach(item => {
        data.push(item.name)
    })

    return (
        <section>
            <header className="p-3 text-center">
                Download useful materials to enhance your growth, <strong>ALL FOR FREE</strong>
            </header>
            <fieldset className="flex flex-wrap gap-3 md:gap-5 justify-center max-w-[90dvw] md:max-w-[70%] mx-auto mt-10 px-10">
                {data?.map((item, itemIdx) => (
                    <Card key={itemIdx} item={item} />
                ))}
            </fieldset>
        </section>
    )
}

export default Resources