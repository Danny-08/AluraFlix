
//  fetch
import { useState, useEffect } from 'react';

export const api = {
  getVideos: async (url) => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
  }
};

