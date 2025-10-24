# 🔮 Pitonisa_001 — Tarot App Modular

**Última actualización:** 24 de octubre de 2025, 04:05 AM (Argentina)

Una experiencia digital narrativa y modular para consultas de tarot. Desarrollada con **React + Vite + WindiCSS** en el frontend, **Express + MongoDB Atlas** en el backend, e integrada con **Google AdSense** para monetización respetuosa. Inspirada en estética Mechanicus y terminal sci-fi.

---

## 📁 Estructura del proyecto
Pitonisa_001/ 
├── frontend/ 
│   ├── src/ 
│   │   ├── components/ 
│   │   │   ├── AdBanner.tsx 
│   │   │   ├── Layout.tsx 
│   │   │   └── CardTirada.tsx 
│   │   ├── pages/ 
│   │   │   ├── Amor.tsx 
│   │   │   ├── Dinero.tsx 
│   │   │   ├── Salud.tsx 
│   │   ├── router/ 
│   │   │   └── index.tsx 
│   │   ├── assets/cards/ 
│   │   │   └── cartas.json 
│   │   ├── App.tsx 
│   │   └── main.tsx 
│   ├── vite.config.ts 
│   ├── windi.config.ts 
│   └── index.html 
├── backend/ 
│   ├── models/ 
│   │   └── Consulta.js 
│   ├── routes/ 
│   │   └── consultas.js 
│   ├── config/ 
│   │   └── database.js 
│   ├── .env 
│   ├── index.js 
│   └── package.json 
├── README.md 
└── .gitignore

---

## 🧩 Componentes clave

- `AdBanner.tsx`: integración con Google AdSense
- `Layout.tsx`: estructura base con header, banner y footer
- `CardTirada.tsx`: tirada de cartas con interpretación por posición
- `cartas.json`: 78 cartas del tarot (mayores y menores) con significados para pasado, presente y futuro

---

## 🔮 Funcionalidad

- Selección de categoría: Amor, Dinero, Salud
- Tirada de 3 cartas con interpretación narrativa
- Modal visual y estilo Mechanicus
- Guardado de consultas en MongoDB Atlas
- Monetización con AdSense en zonas no intrusivas

---

## 🛠️ Scripts útiles

### Frontend

```bash
npm install
npm run dev

### Backend

npm install
npm run dev
```

✨ Autor
Franco — Carhué, Argentina
Digital artisan enfocado en diseño narrativo, análisis técnico y visualización de datos.




