import React from 'react';
import { Stack, Typography } from '@mui/material';
import logo from '../assets/images/logo-main.jpg';
// {
//
// }



const BodyPart = ({ item, setBodyPart, bodyPart }) => (

  function bgImage() {
  if (item === 'all') {
	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />
  )
} else if(item === 'arms') {
		return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
}else if(item === 'back') {
  	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
} else if(item === 'chest') {
  	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
}else if(item === 'legs') {
	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
}else if(item === 'shoulders') {
  	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
} else if(item === 'abs') {
  	return(
    <img
        className="hero-profile-img"
        src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg"
        alt=""
      />)
  
} 
  }

  // <Stack
  //   type="button"
  //   alignItems="center"
  //   justifyContent="center"
  //   className="bodyPart-card"
  //   sx={
  //     bodyPart === item
  //       ? {
  //           borderTop: '4px solid #FF2625',
  //           background: '#fff',
  //           borderBottomLeftRadius: '20px',
  //           width: '270px',
  //           height: '282px',
  //           cursor: 'pointer',
  //           gap: '47px',
  //         }
  //       : {
  //           background: '#fff',
  //           borderBottomLeftRadius: '20px',
  //           width: '270px',
  //           height: '282px',
  //           cursor: 'pointer',
  //           gap: '47px',
  //         }
  //   }
  //   onClick={() => {
  //     setBodyPart(item);
  //     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  //   }}
  // >
  //   <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
  //   <Typography
  //     fontSize="24px"
  //     fontWeight="bold"
  //     fontFamily="Alegreya"
  //     color="#3A1212"
  //     textTransform="capitalize"
  //   >
  //
  //     {item}
  //   </Typography>
  // </Stack>

  <Stack>
    <div className="first hero">
      {bgImage()}
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
        style={{ cursor: 'pointer' }}
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

export default BodyPart;
