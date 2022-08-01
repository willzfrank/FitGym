/* eslint-disable operator-linebreak */
import React from 'react';
import { Stack, Typography } from '@mui/material';
import logo from '../assets/images/logo-main.jpg';

const BodyPart = ({ item, setBodyPart }) => {
  let image;

  if (item === 'all') {
    image =
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  }

  if (item === 'arms') {
    image =
      'https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg';
  }

  if (item === 'back') {
    image =
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';
  }

  if (item === 'chest') {
    image =
      'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  }

  if (item === 'legs') {
    image =
      'https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg';
  }

  if (item === 'shoulders') {
    image =
      'https://www.mensjournal.com/wp-content/uploads/2018/01/renegaderow.jpg?w=900&quality=86&strip=all';
  }

  if (item === 'abs') {
    image =
      'https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg';
  }

  if (item === 'cardio') {
    image =
      'https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80';
  }

  if (item === 'lower arms') {
    image =
      'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80';
  }

  if (item === 'lower legs') {
    image =
      'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  }

  if (item === 'upper arms') {
    image =
      'https://www.themanual.com/wp-content/uploads/sites/9/2021/02/best-arm-workouts-for-men-2021.jpg?fit=800%2C800&p=1';
  }

  if (item === 'upper legs') {
    image =
      'https://cdn.shopify.com/s/files/1/1728/2157/articles/63.jpg?v=1650923607';
  }

  if (item === 'waist') {
    image =
      'https://media1.popsugar-assets.com/files/thumbor/xbcJWYwW0jFwJFW0G4gqKPDXrsg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/09/27/821/n/1922729/b658b01c5bad24b8279dc2.83874567_/i/How-Lose-Belly-Fat-Gym.jpg';
  }

  if (item === 'neck') {
    image =
      'https://i0.wp.com/hersovyac.com/wp-content/uploads/2020/09/Big-neck-full-neck-workout-neck-guide.jpg?resize=702%2C526&ssl=1';
  }
  return (
    <Stack>
      <div className="first hero">
        <img className="hero-profile-img" src={image} alt="lol" />
        <div className="hero-description-bk" />
        <div className="hero-logo">
          <img src={logo} alt="" />
        </div>
        <div className="hero-description">
          <Typography
            fontSize="24px"
            fontWeight="bold"
            fontFamily="Courgette"
            color="#fff"
            textTransform="capitalize"
          >
            {item}
          </Typography>
        </div>
        <button
          className="hero-btn"
          type="button"
          style={{
            cursor: 'pointer',
            borderRadius: '4%',
            border: '2px solid grey',
          }}
          onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          }}
        >
          <Typography
            fontSize="20px"
            fontFamily="Courgette"
            color="#3A1212"
            textTransform="capitalize"
          >
            {item} Workouts <i className="uil uil-arrow-right" />
          </Typography>
        </button>
      </div>
    </Stack>
  );
};

export default BodyPart;
