// schemas/professores.js
export default {
  name: 'professores',
  type: 'document',
  title: 'Professores',
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
      name: 'nome',
      type: 'string',
      title: 'Nome',
    },
    {
      name: 'disciplina',
      type: 'string',
      title: 'Disciplina',
    }
  ]
}