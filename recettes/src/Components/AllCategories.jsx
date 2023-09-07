import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import RecipeFunction from './RecipeFunction';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const RecipesFunctions = new RecipeFunction();

const AllCategories = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['categories'],
        queryFn: () => RecipesFunctions.getAllCategories(),
    });

    if (isLoading) return <div>Changerment</div>
    if (isError) return <div>Erreur: {error.message}</div>

  return (
    <Container>
        <h1 className='text-light'>Liste des Catégories de Recettes</h1>
        <Card>
            <div>
                {data && data.categories.map(category =>
                    <Link className='' to={`/categories/${category.strCategory}`} key={category.idCategory}>
                        <Card.Subtitle className='p-2 fw-bolder text-dark'>{category.strCategory}</Card.Subtitle>
                    </Link>
                )}
            </div>
        </Card>
    </Container>
  )
}

export default AllCategories