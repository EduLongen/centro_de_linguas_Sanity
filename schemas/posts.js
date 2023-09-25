// schemas/posts.js
export default {
    name: 'posts',
    type: 'document',
    title: 'Posts',
    fields: [
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem',
        options: {
          hotspot: true // Defaults to false
        },
      },
      {
        name: 'href',
        type: 'url',
        title: 'Link',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto',]
        })
      }
    ]
}