import {defineField, defineType} from 'sanity'

export const blogentry = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'title', // Feldname für den Titel des Blogbeitrags
      title: 'Title', // Titel im Studio
      type: 'string', // Datentyp (hier ein Text)
    }),
    {
      name: 'content', // Feldname für den Inhalt des Beitrags
      title: 'Content',
      type: 'array', // Hier kannst du längeren Text eingeben
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'publishedAt', // Feldname für das Veröffentlichungsdatum
      title: 'Published At',
      type: 'datetime', // Datums- und Zeitfeld
    },
  ],
})