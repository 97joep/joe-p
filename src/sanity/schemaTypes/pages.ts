import { defineField, defineType } from "sanity"

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({name: 'linkName', type: 'string', validation: rule => rule.required()}),
        defineField({name: 'linkHref', type: 'string', validation: rule => rule.required()}),
    ],
})