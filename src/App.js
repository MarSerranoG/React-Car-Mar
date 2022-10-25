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
        nombre="Gorillaz Stylo Car"
        modelo="Camaro 69"
        imagen="https://s1.cdn.autoevolution.com/images/news/someone-has-recreated-the-chevrolet-camaro-from-gorillazs-stylo-for-gts-143187-7.jpg"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        style={{ margin: '6px' }}
      />
      <Car
        nombre="Mustang Charge"
        modelo="1967"
        imagen="https://cdn.forbes.com.mx/2019/07/mustang-auto-carro-charge-electrico-verde-640x360.jpg"
        descripcion="Restomod eléctrico del clásico de Ford de 1976"
        style={{ margin: '6px' }}
      />
    </div>
  );
}