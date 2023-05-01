import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <div className="container">
        <h2>My Work</h2>
        <div className="media-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/maJKKSTarUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img src="https://i.pximg.net/img-master/img/2014/10/01/21/37/09/41829678_p0_master1200.jpg" alt="Random Image" />
          <img src="https://i.pximg.net/img-master/img/2014/10/01/21/37/09/41829678_p0_master1200.jpg" alt="Random Image" />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/maJKKSTarUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img src="https://i.pximg.net/img-master/img/2014/10/01/21/37/09/41829678_p0_master1200.jpg" alt="Random Image" />
        </div>
      </div>
    </div>
  );
}

export default App;