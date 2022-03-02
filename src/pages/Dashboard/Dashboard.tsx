import styled from 'styled-components/macro'
import { FormIngredients } from 'shared/FormIngredients'
import { FormRecipe } from 'shared/FormRecipe'
const Dashboard = ({ className }: { className?: string }) => {
    /*
    TODO: USAR O HOOK DO USE FORMIK EM AMBOS OS FORMKS E TRABALHAR O ESTADO DE FORMA GLOBAL PARA ENVIAR O DATA COM O 
    NOME ID DA RECEITA MAIS O ARRAY DE INGREDIENTS 
    */ 
    // const [data, setData] = useState<Array<RecipeType>>([])
    return (
        <div className={className}>
            <FormRecipe  />
            <FormIngredients />
            {/* <Recipes recipes={data} /> */}
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
