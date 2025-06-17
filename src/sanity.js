import { createClient } from '@sanity/client'

export const sanity = createClient({
    projectId: 'du3pegoi',
    dataset: 'production',
})