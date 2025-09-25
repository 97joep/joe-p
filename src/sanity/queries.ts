export const personalQuery = `*[_type == "about"][0]{
    _id,
    pageTitle,
    pageSubheading,
    description,
    techStack,
    contact[] {
        _key,
        email,
        displayText,
        contactLink
    },
    cv {
        "url": asset->url
    }
}`

export const pageQuery = `*[_type == "page"]{
    _id,
    linkName,
    linkHref
}`

export const projectQuery = `*[_type == "project"]{
    _id,
    projectName,
    projectStatus,
    dateComplete,
    projectLink {
        href,
        gated,
        gateMessage,
    },
    projectGitHub {
        gitHubLink,
        gitHubStatus,
        gitHubMessage,
    },
    collaborators,
    collaboratorsInfo[] {
        _key,
        name,
        link
    }
}`