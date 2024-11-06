'use client';

/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export const colors = {
  gray: '#7E878D',
  grayLight: '#DEE9FC',
  dark2: '#3A3E44',
  dark1: '#2A2D32',
  dark: '#191B1F',
  blue: '#3662E3',
  brown: '#C18D30',
  white: '#F0F6FE',
};

export const GlobalStyles = () => (
  <Global
    styles={css`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    </style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: "DM Sans", serif;
        font-style: normal;
        margin: 0;
        //background-color: ${colors.dark};
      }
    `}
  />
);
