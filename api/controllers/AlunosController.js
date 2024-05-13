module.exports = {
    async create(req, res) {
        try {
        const novoAluno = await Aluno.create(req.body).fetch();
        return res.status(201).json(novoAluno);
        } catch (erro) {
        return res.status(500).json({ erro: 'Erro ao criar o aluno.' });
        }
    },
    async list(req, res) {
        try {
        const alunos = await Aluno.find();
        return res.json(alunos);
        } catch (erro) {
        return res.status(500).json({ erro: 'Erro ao listar os alunos.' });
        }
    }
};
  