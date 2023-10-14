import React from 'react';
import axios from 'axios';

const post = () => {};

const get = path => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com' + path)
      .then(response => {
        resolve(response);
      })
      .catch(e => reject(e));
  });
};

const getWithToken = () => {};

const Service = {
  get,
  post,
  getWithToken,
};

export default Service;
