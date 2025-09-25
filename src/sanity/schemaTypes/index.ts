import { type SchemaTypeDefinition } from 'sanity'
import projects from './projects'
import collaboratorsObject from './objects/collaborators-object'
import richText from './objects/richText'
import pages from './pages'
import contact from './objects/contact'
import personal from './personal'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projects,
    pages,
    personal,
    collaboratorsObject,
    richText,
    contact,
  ],
}
