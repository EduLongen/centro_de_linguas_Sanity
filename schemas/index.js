
// schemas/index.js
import avaliacao from './avaliacao'
import cursos from './cursos'
import cordenacao from './cordenacao'
// email não será no sanity
import posts from './posts'
import faq from './faq'
import professores from './professores'

export const schemaTypes = [avaliacao, cursos, cordenacao, posts, faq, professores]
