import styled from 'styled-components/macro'
import { RecipeType } from 'resources/types'
interface RecipesProps {
    className?: string,
    recipes: RecipeType[]
}
const Recipes = ({ className, recipes }: RecipesProps) => {
    return (
        <div className={className}>
            {!recipes ? null : recipes.map((recipe, index) => (
                <ul key={index}>
                    <li>Nome da Receita: {recipe.name}</li> */
                    {recipe.ingredients.map(ingredient => (
                        <>
                            <li>Nome do Ingrediente: {ingredient.name}</li>
                            <li>Número da medida: {ingredient.measure}</li>
                            <li>Quantidade: {ingredient.quantity}</li>
                            <li>Preço: {ingredient.price}</li>
                            <li>
                                <span>Passo a passo:</span>
                                <p>
                                    {ingredient.prepare}
                                </p>
                            </li>
                        </>
                    ))}
                </ul>
            ))}
        </div>
    )
}
const StyledRecipes = styled(Recipes)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 1.8rem;
    gap: 3rem;
    padding: 2rem;
    grid-area: recipeResult;
    ul {
        display: grid;
        li {
            padding: 1rem 0rem;
            list-style-type: none;
            justify-self: center;
            text-align: center;
        }
        span {
            display: block;
            padding-bottom: 1rem;
        }
        p {
            height: 10rem;
            overflow-y: auto;
            word-break: break-word;
            text-align: center;
        }
    }
    
  
`
export { StyledRecipes as Recipes }