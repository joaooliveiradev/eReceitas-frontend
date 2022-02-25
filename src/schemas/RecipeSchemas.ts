import * as Yup from 'yup'

export const RecipeSchema = Yup.object().shape({
    ingrediente: Yup.string()
        .min(3, 'Muito poucas letras')
        .max(20, 'Muito longo')
        .required('Campo obrigatório'),
    medida: Yup.string()
        .min(3, 'Muito poucas letras')
        .max(26, 'Muito longo')
        .required('Campo obrigatório'),
    quantidade: Yup.number()
        .min(1, 'Muito poucas letras')
        .max(1, 'Muito longo')
        .required('Campo obrigatório'),
    preco: Yup.number()
        .min(1, 'Muito poucas letras')
        .required('Campo obrigatório'),
    preparo: Yup.string()
        .min(1, 'Muito poucas letras')
        .required('Campo obrigatório'),
})