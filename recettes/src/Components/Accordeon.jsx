import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import IngredientsMeasures from './IngredientsMeasures';

const Accordeon = ({info}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='fw-bold text-light'>Ingrédients et quantité</Accordion.Header>
        <Accordion.Body>
            <IngredientsMeasures info={info}></IngredientsMeasures>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='text-dark'>Instructions</Accordion.Header>
        <Accordion.Body className='text-dark'>
            {info.strInstructions}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Accordeon