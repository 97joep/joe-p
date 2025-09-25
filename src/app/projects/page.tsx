import { client } from "@/sanity/lib/client"
import { projectQuery } from "@/sanity/queries"
import { ProjectData } from "@/sanity/dataTypes"
import ProjectContent from "@/ui/projects/Project";

const projects: ProjectData[] = await client.fetch(projectQuery);

export default function Projects() {

    return (
        <section className="w-full h-full">
            <div className="w-full h-full overflow-hidden">
                <div className="w-full h-full flex flex-col items-end">
                    {projects.map((project) => (
                        <ProjectContent key={project._id} p={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}