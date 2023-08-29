import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'cms',

  projectId: '2qgb8y91',
  dataset: 'production',
  basePath: '/',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
