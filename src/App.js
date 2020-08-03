import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App() {
  return (
  <main>
  <h1>Greetings, Aryan </h1>
  <Weather/>
    <section>
     <div>
        <h3>Today's Agenda</h3>
      <ToDo/>
      </div>
      <div>
        <h3>Latest headlines</h3>
        <News/>
      </div>
      <div>
      <iframe id="Spotify" src="https://open.spotify.com/embed/album/7IoC4T3rL7jvl91K1Jbpqs" width="240" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
       </section>
  </main>
  );
}

export default App;
