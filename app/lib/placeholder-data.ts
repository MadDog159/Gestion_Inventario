// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const { v4: uuidv4 } = require('uuid');

const products = [
  { id: uuidv4(), name: 'Lápiz HB', category: 'Papelería', stock: 100 },
  { id: uuidv4(), name: 'Cuaderno A4', category: 'Papelería', stock: 200 },
  { id: uuidv4(), name: 'Tijeras', category: 'Papelería', stock: 150 },
  { id: uuidv4(), name: 'Regla 30cm', category: 'Papelería', stock: 80 },
  { id: uuidv4(), name: 'Goma de borrar', category: 'Papelería', stock: 120 },
  { id: uuidv4(), name: 'Bolígrafo azul', category: 'Papelería', stock: 90 },
  { id: uuidv4(), name: 'Champú', category: 'Higiene', stock: 50 },
  { id: uuidv4(), name: 'Jabón', category: 'Higiene', stock: 300 },
  { id: uuidv4(), name: 'Pasta de dientes', category: 'Higiene', stock: 70 },
  { id: uuidv4(), name: 'Cepillo de dientes', category: 'Higiene', stock: 110 },
  { id: uuidv4(), name: 'Manzanas', category: 'Alimentos', stock: 60 },
  { id: uuidv4(), name: 'Naranjas', category: 'Alimentos', stock: 130 },
];


module.exports = { products };
