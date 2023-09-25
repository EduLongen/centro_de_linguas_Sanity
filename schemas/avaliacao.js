// schemas/avaliacao.js
export default {
  name: 'avaliacoes',
  type: 'document',
  title: 'Avaliações',
  fields: [
    {
      name: 'nota_avaliacao',
      type: 'number',
      title: 'Nota da avaliação'
    },
    {
      name: 'nome_avaliacao',
      type: 'string',
      title: 'Nome da avaliação'
    },
    {
      name: 'instagram_usuario',
      type: 'url',
      title: 'Instagram do usuário',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto',]
      })
    },
    {
      name: 'texto_avaliacao',
      type: 'string',
      title: 'Texto da avaliação'
    }
  ]
}