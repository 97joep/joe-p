import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/queries";
import { PageData } from "@/sanity/dataTypes";
import Link from "next/link";

const page: PageData[] = await client.fetch(pageQuery);

export default function GlobalMenu() {
    return (
        <div>
            <ul className="flex flex-col">
                {page.map((p) => (
                    <Link
                        key={p._id}
                        href={p.linkHref}
                        className="color-hover"
                    >
                        {p.linkName}
                    </Link>
                ))}
            </ul>
        </div>
    )
}