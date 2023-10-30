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
    name: 'foto_avaliacao',
      type: 'image',
      title: 'Foto da avaliacao'
    },
    {
      name: 'instagram_usuario',
      type: 'string',
      title: 'Instagram do usuário',
    },
    {
      name: 'texto_avaliacao',
      type: 'string',
      title: 'Texto da avaliação'
    }
  ]
}