export type IngredientsType = {
    name: string,
    measure: string,
    quantity: number,
    price: number,
    prepare: string,
}
export type RecipeType = {
    id: number,
    name: string,
    ingredients: IngredientsType[]
}