export interface Ingredient {
  name: string;
}

export interface RecipeIngredient {
  quantity: number;
  measurementUnit: measurementUnit;
}

export interface Recipe {
  id: number;
  name: string;
  imageUrl?: string;
  ingredients: RecipeIngredient[];
}

enum measurementUnit {
  gram,
  glass
}
