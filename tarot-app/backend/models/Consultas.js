import mongoose from 'mongoose'

const consultaSchema = new mongoose.Schema({
  usuario: String,
  categoria: String,
  cartas: [
    {
      nombre: String,
      posicion: String,
    },
  ],
  fecha: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Consulta', consultaSchema)
