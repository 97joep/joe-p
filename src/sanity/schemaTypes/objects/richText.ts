import { defineType, defineArrayMember } from "sanity"

export default defineType({
    name: 'richText',
    title: 'Rich Text',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'}
            ],
            lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'numbered'}
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                    {title: 'Code', value: 'code'},
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                            {name: 'href', type: 'url', title: 'URL'},
                            {name: 'newTab', type: 'boolean', title: 'Open in new tab', initialValue: true,}
                        ]
                    },
                    {
                        name: 'copy',
                        title: 'Copyable',
                        type: 'object',
                        fields: [
                            { name: 'label', type: 'string', title: 'Button label', initialValue: 'Copy' } // optional
                        ],
                    }
                ],
            },
        }),
        defineArrayMember({
            type: 'code',
            name: 'codeBlock',
            title: 'Code Block',
            options: {
                language: 'ts',
                withFilename: true,
                languageAlternatives: [
                {title: 'TypeScript', value: 'ts'},
                {title: 'JavaScript', value: 'javascript'},
                {title: 'JSON', value: 'json'},
                {title: 'Shell', value: 'bash'},
                {title: 'CSS', value: 'css'},
                {title: 'HTML', value: 'html'},
                ],
            },
        }),
    ],
})