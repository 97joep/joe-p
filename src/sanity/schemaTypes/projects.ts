import { defineField, defineType } from "sanity";

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({name: 'projectName', title: 'Project Name', type: 'string', validation: rule => rule.required()}),
        defineField({name: 'projectStatus', title: 'Project Status', type: 'string', options: {
            list: [
                {title: 'Complete', value: 'complete'},
                {title: 'In Progress', value: 'inProgress'},
            ],
            layout: 'radio',
            direction: 'vertical',
        }, validation: rule => rule.required()}),
        defineField({name: 'dateComplete', title: 'Date Completed?', type: 'date', validation: rule => rule.custom((value, context) => {
            const isComplete = (context as any).document?.projectStatus === "complete"
            if (isComplete && !value) return 'Must provide the date of completion if the project is marked as "complete.'
            return true
        })}),
        defineField({name: 'projectLink', title: 'Project Link', type: 'object', fields: [
            defineField({name: 'href', title: 'HREF', type: 'string', validation: rule => rule.custom((value, context) => {
                const isComplete = (context as any).document?.projectStatus === 'complete'
                if (isComplete && !value) return 'Required when project is marked as complete.' 
                return true
            }),}),
            defineField({name: 'gated', title: 'Gated?', type: 'boolean',}),
            defineField({name: 'gateMessage', title: 'Gate Message?', type: 'richText', validation: rule => rule.custom((value, context) => {
                const isGated = (context as any).document?.gated
                if (isGated && !value) return 'Required when "Gated" is enabled.'
                return true
            }),}),
        ]}),
        defineField({name: 'projectGitHub', title: 'GitHub', type: 'object', fields: [
            defineField({name: 'gitHubLink', title: 'GitHub Link', type: 'string', validation: rule => rule.required()}),
            defineField({name: 'gitHubStatus', title: 'Repo Type/Status', type: 'string', options: {
                list: [
                    {title: 'Public', value: 'public'},
                    {title: 'Private', value: 'private'},
                    {title: 'Unavailable', value: 'unavailable'},
                ],
                layout: 'dropdown',
            }, validation: rule => rule.required()}),
            defineField({name: 'gitHubMessage', title: 'GitHub Gate Message?', type: 'richText', validation: rule => rule.custom((value, context) => {
                const isGated = (context as any).document?.gitHubStatus === 'private'
                if (isGated && !value) return 'Required when GitHub repo is "private".'
                return true
            }),})
        ]}),
        defineField({name: 'collaborators', title: 'Collaborators?', type: 'boolean'}),
        defineField({name: 'collaboratorsInfo', title: 'Collaborators Info', type: 'array', of: [{type: 'collaboratorsObject'}], hidden: ({document}) => !document?.collaborators, validation: rule => rule.custom((value, context) => {
            const enabled = (context as any).document?.collaborators
            if (!enabled) return true
            return value?.length ? true : 'Add at least one collaborator.'
        })})
    ]
})