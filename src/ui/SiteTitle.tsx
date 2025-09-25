import { client } from "@/sanity/lib/client";
import { personalQuery } from "@/sanity/queries";

const personal = await client.fetch(personalQuery);

export default function SiteTitle() {
    return (
        <div>
            <h1>{personal.pageTitle}</h1>
            <span>{personal.pageSubheading}</span>
        </div>
    )
}