import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo-main.jpg';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '50px',
          margin: 'auto 20px',
          border: '2px solid grey',
          borderRadius: '30%',
        }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        className="home_btn"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{ textDecoration: 'none', color: '#3A1212' }}
        className="home_btn"
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
