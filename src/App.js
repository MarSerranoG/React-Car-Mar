import React from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6 de NASCAR"
        imagen="https://s1.cdn.autoevolution.com/images/news/someone-has-recreated-the-chevrolet-camaro-from-gorillazs-stylo-for-gts-143187-7.jpg"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        style={{ margin: '6px' }}
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg"
        descripcion="El Compañero fiel del auto veloz de la pelicula Cars."
        style={{ margin: '6px' }}
      />
    </div>
  );
}