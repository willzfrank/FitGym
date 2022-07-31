import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography fontWeight="600" fontSize="26px" style={{ color: 'grey' }}>
      Gym Partner
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Start your Fitness <br />
      Journey Today
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized for you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        className="explore-btn"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          background: 'grey',
          borderRadius: '10px',
        }}
      >
        Explore
        <i className="uil uil-arrow-right" />
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
      style={{ color: 'grey' }}
    >
      Exercise
    </Typography>
    <img
      src="https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="hero-banner"
      className="hero-banner-img"
    />
  </Box>
);

export default HeroBanner;
