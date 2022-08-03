import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import footerlogo from '../assets/images/logo-main.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={footerlogo}
        alt="logo"
        style={{
          width: '200px',
          height: '80px',
          border: '2px solid grey',
          borderRadius: '30%',
        }}
      />
    </Stack>
    <Typography
      variant="h6"
      sx={{ fontSize: { lg: '20px', xs: '15px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      fontFamily="Courgette"
    >
      Check Out more Works in{' '}
      <a
        href="github.com/willzfrank"
        target="_blank"
        style={{
          borderBottom: '1px solid grey',
          color: 'grey',
          textDecoration: 'none',
        }}
      >
        {' '}
        github.com/willzfrank{' '}
      </a>
      Cheers Mate.
    </Typography>
  </Box>
);

export default Footer;
