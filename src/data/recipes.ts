import type { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'paella-valenciana',
    title: 'Paella Valenciana',
    description: 'La auténtica paella valenciana con pollo, conejo, garrofó, tabella y azafrán. Una receta tradicional española que te transportará directamente a Valencia.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500&h=300&fit=crop',
    difficulty: 'Intermedio',
    prepTime: 45,
    servings: 6,
    tags: ['española', 'arroz', 'tradicional', 'valencia'],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    ingredients: [
      { name: 'arroz bomba', amount: '400', unit: 'g' },
      { name: 'pollo troceado', amount: '1', unit: 'unidad' },
      { name: 'conejo troceado', amount: '500', unit: 'g' },
      { name: 'garrofó', amount: '200', unit: 'g' },
      { name: 'tabella', amount: '200', unit: 'g' },
      { name: 'pimiento rojo', amount: '1', unit: 'unidad' },
      { name: 'azafrán', amount: 'al gusto' },
      { name: 'aceite de oliva', amount: 'al gusto' },
      { name: 'sal y pimienta', amount: 'al gusto' }
    ],
    steps: [
      {
        number: 1,
        title: 'Sofreír las carnes',
        description: 'Calentar aceite en la paellera y sofreír el pollo y conejo hasta dorar por todos los lados.',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
        duration: 8
      },
      {
        number: 2,
        title: 'Añadir el pimiento',
        description: 'Añadir el pimiento rojo cortado en tiras y sofreír durante 2 minutos.',
        image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&h=300&fit=crop',
        duration: 2
      },
      {
        number: 3,
        title: 'Incorporar las verduras',
        description: 'Incorporar el garrofó y la tabella, sofreír otros 2 minutos removiendo bien.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        duration: 2
      },
      {
        number: 4,
        title: 'Añadir el arroz',
        description: 'Añadir el arroz y mezclar bien con todos los ingredientes durante 2-3 minutos.',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
        duration: 3
      },
      {
        number: 5,
        title: 'Cocer con caldo',
        description: 'Verter el caldo caliente con azafrán y cocer 20 minutos sin remover. Dejar reposar 5 minutos.',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop',
        duration: 25
      }
    ]
  },
  
];