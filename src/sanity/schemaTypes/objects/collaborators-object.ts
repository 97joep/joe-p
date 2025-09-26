import { defineType, Rule, StringRule, ValidationContext } from "sanity"
export default defineType({
    name: 'collaboratorsObject',
    type: 'object',
    fields: [
        {name: 'name', title: 'Collaborators Name', type: 'string'},
        {name: 'link', title: 'Collaborators Link', type: 'string', validation: (rule: Rule) => rule.custom((value: string | undefined, context: ValidationContext) => {
            const parent = context.parent as { name?: string } | undefined;
            const namePresent = !!parent?.name
            if (namePresent && !value) return 'Link required with name'
            return true
        })},
    ]
})