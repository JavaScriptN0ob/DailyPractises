import React from 'react';

import './CardList.css';

import Card from '../Card';

const CardList = ({
  monsters,
}) => (
    <div className='card-list'>
      {
        monsters.map((monster) => <Card key={monster.id} monster={monster} />)
      }
    </div>
);

export default CardList;
