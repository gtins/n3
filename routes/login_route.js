import express from 'express';
import { generateToken } from '../auth.js'; 

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, senha } = req.body; // Supondo que receba email e senha no corpo da requisição

  if (email === 'usuario@teste.com' && senha === 'senha123') {
    const userId = 123;
    const token = generateToken(userId); // Substitua userId pelo ID do usuário autenticado

    res.status(200).json({ auth: true, token });
  } else {
    res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
  }
});

export default router;