const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// ROUTE REGISTER
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  
  // Hashing password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    res.json({ message: "User berhasil dibuat", user });
  } catch (error) {
    res.status(400).json({ error: "Email sudah terdaftar" });
  }
});

// ROUTE LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "User tidak ditemukan" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Password salah" });
  }

  res.json({ message: "Login Berhasil!", user: { id: user.id, email: user.email } });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});