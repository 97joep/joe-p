import { Button } from "@/components/ui/button";
import { ProjectData } from "@/sanity/dataTypes";
import Link from "next/link";
import GatedProjectLink from "./GatedProjectLink";
import GitHubIcon from "../icons/GitHubIcon";
import GitHubLink from "./GitHubLink";

export default function ProjectContent({ p } : { p: ProjectData}) {
    return (
        <div className="p-4 flex flex-col gap-2 items-end">
            {p.projectLink.gated ? (
                <GatedProjectLink name={p.projectName} link={p.projectLink.href} message={p.projectLink.gateMessage} />
            ) : (
                <Link href={p.projectLink.href}>{p.projectName}</Link>
            )}
            <div className="flex flex-row-reverse gap-2 items-center">
                <div className="h-6! w-6! size-hover">
                    <GitHubLink project={p} />
                </div>
                <div>
                    {p.dateComplete} /
                </div>
            </div>
            {p.collaborators && (
                <div className="flex flex-row-reverse gap-2">
                    {p.collaboratorsInfo.map((c) => (
                        <Link key={c._key} href={c.link}>
                            {c.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}