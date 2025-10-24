import express from 'express'
import Consulta from '../models/Consulta.js'
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const nueva = new Consulta(req.body)
    await nueva.save()
    res.status(201).json(nueva)
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar consulta' })
  }
})

export default router