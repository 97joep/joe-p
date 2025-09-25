import { PersonalData } from "@/sanity/dataTypes"
import { client } from "@/sanity/lib/client"
import { personalQuery } from "@/sanity/queries"
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const personal: PersonalData = await client.fetch(personalQuery);

export default function ContactPage() {
    return (
        <section className="w-full h-full">
            <div className="absolute p-4 bottom-0 right-0">
                <div className="flex flex-col items-end">
                    {personal.contact.map((c) => (
                        <Link
                            key={c._key}
                            href={c.email ? `mailto:${c.contactLink}` : c.contactLink} 
                            rel={c.email ? "" : "noopener noreferrer"}
                            target={c.email ? "" : "_blank"}
                            className="flex! gap-2 items-center py-2 justify-end"
                        >
                            <span>{c.displayText}</span>
                            <div className="h-4 w-4">
                                <ArrowUpRight />
                            </div>
                        </Link>
                    ))}
                </div>
                
            </div>
        </section>
    )
}