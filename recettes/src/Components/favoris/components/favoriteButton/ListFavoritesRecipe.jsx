import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from '../../store/favoriteSelectors'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import FavoriteButton from '../favoriteButton/FavoriteButton'; 



const ListFavoritesRecipe = () => {
    const favorites = useSelector(favoritesSelector);
    const dispatch = useDispatch();

  return (
    <Container>
        <Link className='backlink text-white' to='/'>&lsaquo; Retour aux Catégories</Link>
        <Card className='my-4 p-4'>
            <Card.Title className='py-4 text-dark'>Mes recettes Favorites</Card.Title>
            <ul>
            {favorites.map((meal) => (
                <li key={meal.idMeal}>
                {meal.name}
                &nbsp;<FavoriteButton meal={meal} />
                </li>
            ))}
            </ul>
        </Card>
    </Container>
  )
}

export default ListFavoritesRecipe