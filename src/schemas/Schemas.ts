import * as Yup from 'yup'

export const RecipeSchema = Yup.object().shape({
    id: Yup.number()
        .required(),
    name: Yup.string()
        .min(1, 'Campo vazio')
        .max(20, 'Nome da receita pode conter até 26 palavras')
        .required('Campo obrigatório'),
    ingredients: Yup.array()
    .required()
})
export const IngredientsSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Muito poucas letras')
        .max(20, 'Muito longo')
        .required('Campo obrigatório'),
    measure: Yup.string()
        .min(3, 'Muito poucas letras')
        .max(26, 'Muito longo')
        .required('Campo obrigatório'),
    quantity: Yup.number()
        .min(1, 'Muito poucas letras')
        .max(1, 'Muito longo')
        .required('Campo obrigatório'),
    price: Yup.number()
        .min(1, 'Muito poucas letras')
        .required('Campo obrigatório'),
    prepare: Yup.string()
        .min(1, 'Muito poucas letras')
        .required('Campo obrigatório')
})