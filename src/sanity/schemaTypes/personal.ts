import { ArrayRule, defineField, defineType, ValidationContext } from "sanity";

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({name: 'pageTitle', type: 'string'}),
        defineField({name: 'pageSubheading', type: 'string'}),
        defineField({name: 'description', type: 'text', validation: rule => rule.required()}),
        defineField({name: 'techStack', type: 'richText', validation: rule => rule.required()}),
        defineField({name: 'contact', type: 'array', of: [{type: 'contact'}], validation: (rule: ArrayRule<unknown>) => rule.custom((value: unknown[] | undefined, context: ValidationContext) => {
            const hasContent = Array.isArray(value) && value.length > 0;
            return hasContent ? true : 'Add at least one contact detail.'
        }),}),
        defineField({name: 'cv', title: 'CV', type: 'file', validation: rule => rule.required()}),
    ],
})