export interface Ingredient {
  name: string;
}

export interface RecipeIngredient {
  title: string;
  quantity: number;
  measurementUnit: MeasurementUnit;
}

export interface Recipe {
  id: number;
  name: string;
  imageUrl?: string;
  ingredients: RecipeIngredient[];
}

export enum MeasurementUnit {
  Gram,
  Glass
}
