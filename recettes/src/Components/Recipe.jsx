import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import RecipeFunction from './RecipeFunction';
import Accordeon from './Accordeon';
import FavoriteButton from './favoris/components/favoriteButton/FavoriteButton';

const Myrecipefunction = new RecipeFunction();

const Recipe = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
      queryKey: ['meal', params.id],
      queryFn: () => Myrecipefunction.getMeal(params.id),
  });

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error: {error.message}</div>


  return (
    <Container fluid>
       <Link className='backlink text-light' to='/'>&lsaquo; Retour aux Catégories</Link> | <Link className='backlink text-light' to='/listfavoritesrecipe'>Voir les recettes favoris &hearts;</Link>
          {data && data.meals.map(info =>
            <Card className='m-4' key={info.idMeal}>
            <div className='row'>
              <div className='col-md-4'>
                <Image src={info.strMealThumb} alt={info.strMeal} fluid thumbnail />
              </div>
              <div className='col-md-8'>
                <h1 className='m-3 text-black'>{info.strMeal}</h1>
                <FavoriteButton meal={info} />
                <Card.Text>{info.strCategory}</Card.Text>
                <Accordeon info={info}></Accordeon>
              </div>
            </div>
            </Card>
          )}
    </Container>
  )
}

export default Recipe