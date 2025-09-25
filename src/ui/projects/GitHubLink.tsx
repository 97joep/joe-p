'use client'

import RichTextCode from "@/components/ui/portable-text-code";
import GitHubIcon from "../icons/GitHubIcon"
import { ProjectData } from "@/sanity/dataTypes";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect } from "react";

export default function GitHubLink({
    project
} : {
    project: ProjectData
}) {
    const projectMailto = `mailto:jjnplnt.freelance@gmail.com?subject=Requesting%20access%20to%20${project.projectName}'s%20repo&body=Let%20me%20know%20who%20you%20are%20and%20why%20you%20want%20access%20to%20the%20repo.`
    return (
        <div>
            {project.projectGitHub.gitHubStatus === "public" ? (
                <Link
                    href={project.projectGitHub.gitHubLink}
                >
                    <GitHubIcon />
                </Link>
            ) : project.projectGitHub.gitHubStatus === "private" ? (
                <AlertDialog>
                    <AlertDialogTrigger><GitHubIcon /></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Repo is private.
                            </AlertDialogTitle>
                            <span>Request access <a className="underline color-hover" href={projectMailto}>here</a></span>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button>
                                <Link href={project.projectGitHub.gitHubLink}>Continue</Link>
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ) : (
                <Tooltip>
                    <TooltipTrigger><GitHubIcon /></TooltipTrigger>
                    <TooltipContent>
                        <p>Repo is currently unavilable</p>
                    </TooltipContent>
                </Tooltip>
            )}
            
        </div>
        
    )
}