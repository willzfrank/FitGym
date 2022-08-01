/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="card" to={`/exercise/${exercise.id}`}>
    <div className="card__header">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="card__image"
        width="600"
      />
    </div>
    <div className="card__body">
      <Stack direction="row">
        <span className="tag tag-blue">{exercise.bodyPart}</span>
        <span className="tag tag-brown">{exercise.target}</span>
      </Stack>

      <h4>{exercise.name}</h4>
      <p>
        {exercise.name} which helps target {exercise.target} and various body
        parts such as {exercise.bodyPart}
      </p>
    </div>
  </Link>
);

export default ExerciseCard;
