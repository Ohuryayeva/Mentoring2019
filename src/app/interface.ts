export interface Ingredient {
  name: string,
}

export interface RecipeIngredient extends Ingredient {
  quantity: number,
  measurementUnit: measurementUnit
}

export interface Recipe extends RecipeIngredient{
  name: string,
  ingredients: []
}

enum measurementUnit {
  gram,
  glass
}
