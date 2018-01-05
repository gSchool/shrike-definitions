const knex = require('./knex')

const getAllTerms = () => knex('term')
const getOneTerm = (id) => knex('term').where('id', id)
const postTerm = (term) => knex('term').insert(term).returning('*')
const updateTerm = (id, term) => knex('term').where('id', id).update(term).returning('*')
const deleteTerm = (id) => knex('term').where('id', id).del().returning('*')


const getAllQuestions = () => knex('question')
const getOneQuestion = (id) => knex('question').where('id', id)
const postQuestion = (question) => knex('question').insert(question).returning('*')
const updateQuestion = (id, question) => knex('question').where('id', id).update(question).returning('*')
const deleteQuestion = (id) => knex('question').where('id', id).del().returning('*')

const getAllCategories = () => knex('category')
const getOneCategory = (id) => knex('category').where('id', id)
const postCategory = (category) => knex('category').insert(category).returning('*')
const updateCategory = (id, category) => knex('category').where('id', id).update(category).returning('*')
const deleteCategory = (id) => knex('category').where('id', id).del().returning('*')


module.exports = {
  getAllTerms,
  getOneTerm,
  postTerm,
  updateTerm,
  deleteTerm,

  getAllQuestions,
  getOneQuestion,
  postQuestion,
  updateQuestion,
  deleteQuestion,

  getAllCategories,
  getOneCategory,
  postCategory,
  updateCategory,
  deleteCategory
}
