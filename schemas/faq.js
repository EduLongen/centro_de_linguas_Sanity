// schemas/faq.js
export default{
  name:'faq',
  type: 'document',
  title: 'faq',
  fields:[
    {
      name:'pergunta',
      type:'string',
      title:'pergunta'
    },
    {
      name:'resposta',
      type:'string',
      title:'resposta'
    }
  ]
}