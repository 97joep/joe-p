import { client } from "@/sanity/lib/client";
import { personalQuery } from "@/sanity/queries";

const personal = await client.fetch(personalQuery)

export default function Home() {
  return (
    <section className="w-full h-full">
      <div className="absolute p-4 bottom-0 right-0 max-w-6/10">
        {personal.description}
      </div> 
    </section>
  );
}
