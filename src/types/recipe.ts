export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  prepTime: number; // en minutos
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
  tags: string[];
}

export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  image?: string;
  duration?: number; // en minutos
}