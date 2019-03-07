import React from 'react';
import './Characters.css';
import { CharactersProps } from './index';
import Character from '../character/Character';

const Characters = ({ characters }: CharactersProps) => (
  <div className="container">
    {characters.map(({ id, ...character }) => (
      <Character key={id} {...character} />
    ))}
  </div>
);

export default Characters;
