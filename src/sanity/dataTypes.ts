import type { PortableTextBlock } from "next-sanity";

export type PageData = {
    _id: string;
    linkHref: string;
    linkName: string;
}

export type ProjectData = {
    _id: string;
    projectName: string;
    projectStatus: string;
    dateComplete: string;
    projectLink: {
        href: string;
        gated: boolean;
        gateMessage: PortableTextBlock[];
    }
    projectGitHub: {
        gitHubLink: string;
        gitHubStatus: string;
        gitHubMessage: GitHubMessage;
    }
    collaborators: boolean;
    collaboratorsInfo: [
        {
            _key: string;
            name: string;
            link: string;
        }
    ]
}

export type AboutData = {
    _id: string;
    pageTitle: string;
    pageSubheading: string;
    description: string;
    techStack: PortableTextBlock[];
    contact: [
        {
            _key: string;
            email: boolean;
            displayText: string;
            contactLink: string;
        }
    ]
    cv: {
        url: string;
    }
}

// helpers

type SanityCodeBlock = {
  _type: 'code' | 'codeBlock' // 'codeBlock' if you named the array member
  code?: string
  language?: string
  filename?: string
  highlightedLines?: number[]
}

export type GitHubMessage = Array<
  PortableTextBlock | SanityCodeBlock
>