import { PersonalData } from "@/sanity/dataTypes";
import { client } from "@/sanity/lib/client"
import { personalQuery } from "@/sanity/queries"
import { PortableText } from "next-sanity";

const personal: PersonalData = await client.fetch(personalQuery);

export default function InfoPage() {
    return (
        <section className="w-full h-full">
            <div className="absolute p-4 bottom-0 right-0">
                <PortableText value={personal.techStack} />
            </div>
            {personal.cv?.url && (
                <a href={personal.cv.url} download className="underline absolute p-4 top-0 right-0 color-hover">
                    Download CV
                </a>
            )}
        </section>
    )
}