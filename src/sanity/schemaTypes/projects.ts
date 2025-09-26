import { defineField, defineType } from "sanity";
import type { ArrayRule, DateRule, Rule, StringRule, ValidationContext } from "sanity";

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
        defineField({name: 'dateComplete', title: 'Date Completed?', type: 'date', validation: (rule: DateRule) => rule.custom((value: string | undefined, context: ValidationContext) => {
            const doc = context.document;
            const isComplete = doc?.projectStatus === "complete"
            return isComplete && !value 
                ? 'Must provide the date of completion if the project is marked as "complete.'
                : true;
        })}),
        defineField({name: 'projectLink', title: 'Project Link', type: 'object', fields: [
            defineField({name: 'href', title: 'HREF', type: 'string', validation: (rule: StringRule) => rule.custom((value: string | undefined, context: ValidationContext) => {
                const doc = context.document;
                const isComplete = doc?.projectStatus === 'complete'
                return isComplete && !value 
                    ? 'Required when project is marked as complete.' 
                    : true;
            }),}),
            defineField({name: 'gated', title: 'Gated?', type: 'boolean',}),
            defineField({name: 'gateMessage', title: 'Gate Message?', type: 'richText', validation: (rule: Rule) => rule.custom((value: unknown, context: ValidationContext) => {
                const doc = context.document as { gated?: boolean } | undefined;
                const isGated = !!doc?.gated
                const hasContent = Array.isArray(value) && value.length > 0;
                return isGated && !hasContent 
                ? 'Required when "Gated" is enabled.'
                : true;
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
            defineField({name: 'gitHubMessage', title: 'GitHub Gate Message?', type: 'richText', validation: (rule: Rule) => rule.custom((value: unknown, context: ValidationContext) => {
                const isGated = context.document?.gitHubStatus === 'private'
                return isGated && !value 
                ? 'Required when GitHub repo is "private".'
                : true
            }),})
        ]}),
        defineField({name: 'collaborators', title: 'Collaborators?', type: 'boolean'}),
        defineField({name: 'collaboratorsInfo', title: 'Collaborators Info', type: 'array', of: [{type: 'collaboratorsObject'}], hidden: ({document}) => !document?.collaborators, validation: (rule: ArrayRule<unknown>) => rule.custom((value: unknown[] | undefined, context: ValidationContext) => {
            const doc = context.document;
            const enabled = doc?.collaborators
            if (!enabled) return true
            return value?.length ? true : 'Add at least one collaborator.'
        })})
    ]
})