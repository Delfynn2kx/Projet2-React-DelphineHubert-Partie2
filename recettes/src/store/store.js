import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../Components/favoris/store/favoritesSlice';

export default configureStore({
	reducer: {
		favorites: favoriteReducer,
	},
});