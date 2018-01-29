import React from 'react';
import ReactDOM from 'react-dom';
//import Media from './src/playlist/components/media';
//import Playlist from './src/playlist/components/playlist';
import Home from './src/pages/containers/home'
import data from './src/json/music.json';

const app = document.getElementById("app");

ReactDOM.render(<Home data={data.categories}/>, app);
