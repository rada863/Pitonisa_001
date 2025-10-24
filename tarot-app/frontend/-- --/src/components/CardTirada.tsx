import { useState } from 'react'
import Layout from './Layout'

type Carta = {
  nombre: string
  posicion: 'pasado' | 'presente' | 'futuro'
  significado: string
}

const cartasBase: Carta[] = [
  { nombre: 'El Loco', posicion: 'pasado', significado: 'Inicio impulsivo, libertad sin rumbo.' },
  { nombre: 'La Emperatriz', posicion: 'presente', significado: 'Fertilidad, creatividad, abundancia emocional.' },
  { nombre: 'El Sol', posicion: 'futuro', significado: 'Éxito, claridad, alegría renovada.' },
]

export default function CardTirada() {
  const [tirada, setTirada] = useState<Carta[]>([])

  const tirarCartas = () => {
    // Simula una tirada aleatoria de 3 cartas
    const seleccionadas = cartasBase.sort(() => 0.5 - Math.random()).slice(0, 3)
    setTirada(seleccionadas)
  }

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Tirada de Cartas</h2>
      <button onClick={tirarCartas} className="bg-arcane text-white px-4 py-2 rounded mb-4">
        Tirar cartas
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tirada.map((carta, index) => (
          <div key={index} className="border p-4 rounded bg-gray-800 text-white">
            <h3 className="text-xl font-bold">{carta.nombre}</h3>
            <p className="italic text-sm text-gray-400">{carta.posicion}</p>
            <p className="mt-2">{carta.significado}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}