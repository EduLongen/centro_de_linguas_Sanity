// schemas/cordenacao.js
export default {
  name: 'cordenacao',
  type: 'document',
  title: 'Coordenação',
  fields: [
    {
      name: 'foto_cordenacao',
      type: 'image',
      title: 'Foto da coordenação'
    },
    {
      name: 'nome_cordenacao',
      type: 'string',
      title: 'Nome da coordenação'
    }
  ]
}