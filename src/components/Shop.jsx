import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL,{
      headers: {
        'Authorization': API_KEY
      }
    )
  }, []);

  return <main className='container-content'></main>;
}

export default Shop;
