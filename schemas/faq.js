// schemas/faq.js
export default{
  name:'faq',
  type: 'document',
  title: 'Faq',
  fields:[
    {
      name:'pergunta',
      type:'string',
      title:'Pergunta'
    },
    {
      name:'resposta',
      type:'string',
      title:'Resposta'
    }
  ]
}