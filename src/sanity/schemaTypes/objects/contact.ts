import { defineType } from "sanity";

export default defineType({
    name: 'contact',
    title: 'Contact',
    type: 'object',
    fields: [
        {name: 'email', title: 'Email?', type: 'boolean'},
        {name: 'displayText', title: 'Contact Display Text', type: 'string'},
        {name: 'contactLink', title: 'Contact Link', type: 'string'}
    ]
})