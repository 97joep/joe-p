import { AboutData } from "@/sanity/dataTypes";
import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/queries";

const data: AboutData = await client.fetch(aboutQuery)

export default function Home() {
  console.log(data);
  return (
    <section className="w-full h-full">
      <div className="absolute p-4 bottom-0 right-0 max-w-6/10">
        {data?.description && (
          data.description
        )}
      </div> 
    </section>
  );
}
