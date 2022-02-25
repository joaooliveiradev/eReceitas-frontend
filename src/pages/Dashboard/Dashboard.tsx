import styled from 'styled-components/macro'
import { FormIngredients } from 'shared/FormIngredients'
import { FormRecipe } from 'shared/FormRecipe'
import { Recipes } from 'shared/Recipes'
import { RecipeTypes } from 'resources/RecipeTypes'
import { useState } from 'react'
import { useFormik } from 'formik'
import { RecipeSchema } from 'schemas/RecipeSchemas'
const formFields: RecipeTypes = {
    receita: '',
    ingrediente: '',
    medida: '',
    quantidade: 0,
    preco: 0,
    preparo: '',
}
const Dashboard = ({ className }: { className?: string }) => {
    const [data, setData] = useState<Array<RecipeTypes>>([])
    const formik = useFormik({
        initialValues: formFields,
        onSubmit: value => {
            console.log('value', value)
            setData((datas) => [...datas.map(data => ({ ...data })), value])
        },
        validationSchema: RecipeSchema,
    });
    return (
        <div className={className}>
            {/* InitialValues : [
                id: 0,
                nomeReceita: '',
                totalIngredientes: 0,
                ingredientesList: [
                    
                ]
            ]*/}
            {/* FormCliente */}
            {/* FormReceita */}
            <FormRecipe />
            <FormIngredients onSubmit={formik.handleSubmit} errors={formik.errors} isValid={formik.isValid} />
            <Recipes recipes={data} />
        </div>
    )
}
const StyledDashboard = styled(Dashboard)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "formRecipe formIngredients"
                         "recipeResult recipeResult";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
`
export { StyledDashboard as Dashboard }
/*
TODO:
deixar minimamente agradevel aos olhos humanos esse negócio feio ae
implementar utilizando algum hook (useRef, useEffect) p resolver problemas de re-render.
Usar ou não uiid4 p extender o projeto a diante?
*/