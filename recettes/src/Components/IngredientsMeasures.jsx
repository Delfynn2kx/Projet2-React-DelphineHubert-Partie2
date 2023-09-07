import React from 'react'

const IngredientsMeasures = ({info}) => {
    const ingredientAndMeasure = [];

    for (let i = 1; i <=20; i++) {
        const ingredient = info[`strIngredient${i}`];
        const measure = info[`strMeasure${i}`];
        
        if (ingredient 
            && ingredient !== '' 
            && measure 
            && measure !== '') {
                ingredientAndMeasure.push({ingredient, measure});
        }
    }

  return (
    <ul>
        {ingredientAndMeasure.map((item, i) => (
            <li className='list-unstyled' key={i}>
                <span className='text-dark'>{item.measure} </span>
                <span className='fw-bold text-dark'>- {item.ingredient}</span>
            </li>
        ))}
    </ul>
  )
}

export default IngredientsMeasures