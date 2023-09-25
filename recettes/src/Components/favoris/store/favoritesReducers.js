const reducers = {
    addFavorite: (state, action) => {
		state.favorites.push({ ...action.payload, name: action.payload.strMeal });
    },
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(
            (favorite) => favorite.idMeal !== action.payload.idMeal
        );
    }
}

export default reducers;


