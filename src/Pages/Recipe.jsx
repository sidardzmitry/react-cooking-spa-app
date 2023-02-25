import {useParams, useNavigate} from 'react-router-dom';
import {getById} from '../api';
import { useEffect, useState } from 'react';
import {Preloader} from '../components/Preloader/Preloader';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return(
        <div className='recipe'>
            <button className='btn btn-category' onClick={() => navigate(-1)}>Back</button>
            {!recipe.idMeal ? <Preloader/> : (
                <div className='recipe__item'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
                    <h2 className='recipe__title'><b>Title: </b>{recipe.strMeal}</h2>
                    {recipe.strCategory ? <h3 className='recipe__category'><b>Category: </b>{recipe.strCategory}</h3> : null}
                    {recipe.strCategory ? <h4 className='recipe__area'><b>Area: </b>{recipe.strArea}</h4> : null}
                    <p className='recipe__instructions'><b>Instructions: </b>{recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                        <div className='recipe__row'>
                        <h3 className='recipe__row-title'><b>Video Recipe</b></h3>
                        <iframe className='recipe__row-video' title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen></iframe>
                        </div>) : (null)}
                </div>
            )}
        </div>
    )
}

export {Recipe};