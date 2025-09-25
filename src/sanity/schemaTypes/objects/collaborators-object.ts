import { defineType } from "sanity"
export default defineType({
    name: 'collaboratorsObject',
    type: 'object',
    fields: [
        {name: 'name', title: 'Collaborators Name', type: 'string'},
        {name: 'link', title: 'Collaborators Link', type: 'string', validation: rule => rule.custom((value, context) => {
            const namePresent = (context as any).parent?.name
            if (namePresent && !value) return 'Link required with name'
            return true
        })},
    ]
})