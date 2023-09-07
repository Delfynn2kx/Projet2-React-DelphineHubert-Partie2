import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import RecipeFunction from './RecipeFunction';

const RecipesFunction = new RecipeFunction();


const Category = () => {
    const params = useParams();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['category', params.name],
        queryFn: () => RecipesFunction.getCategory(params.name),
    });

    if (isLoading) return <div>Chargement</div>
    if (isError) return <div>Erreur: {error.message}</div>

  return (
    <Container fluid>
        <Link className='backlink text-white' to='/'>&lsaquo; Retour aux Catégories</Link>
        <h1 className='m-3 text-dark bg-light p-4'>Recettes de la Catégorie&nbsp;: {params.name}</h1>


        <div className='row'>
        {data && data.meals.map(meal => (
          <div className='col-md-4 mt-4' key={meal.strMeal}>
            <Card>
              <Card.Img variant="top"src={meal.strMealThumb} alt={meal.strMeal} />
              <Card.Body>
                <Card.Text>{meal.strMeal}</Card.Text>
                <Link to={`/meals/${meal.idMeal}`}>Voir la recette</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
    </Container>
  )
}

export default Category