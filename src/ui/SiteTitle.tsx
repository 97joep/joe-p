import { AboutData } from "@/sanity/dataTypes";
import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/queries";

const data: AboutData = await client.fetch(aboutQuery);

console.log(data);

export default function SiteTitle() {
    return (
        <div>
            {data?.pageTitle ? (
                <h1>{data.pageTitle}</h1>
            ): (
                <h1>Joe Plant</h1>
            )}
            
            {data?.pageSubheading ? (
                <span>{data.pageSubheading}</span>
            ) : (
                <span>Web Designer & Developer</span>
            )}
        </div>
    )
}