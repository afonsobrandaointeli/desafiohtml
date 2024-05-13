module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /aluno': 'AlunoController.create',
  'GET /aluno': 'AlunoController.list'
};
