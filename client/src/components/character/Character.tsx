import React from 'react';
import './Character.css';
import { CharacterProps } from './index';
import { defaultThumbnail, defaultTitle } from './defaultValue';

const Character = ({
  thumbnail = defaultThumbnail,
  name = defaultTitle
}: CharacterProps) => (
  <div className="display-box">
    <img
      className="character-image"
      src={thumbnail.path + '.' + thumbnail.extension}
      alt={name}
      width="500"
      height="500"
    />
    <div className="text-block">
      <label className="character-title">{name}</label>
    </div>
  </div>
);

export default Character;
