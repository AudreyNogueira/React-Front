import './App.css';

import gif from '../src/carrega.gif';
import cupom from '../src/cupom.gif';
import { lazy, Suspense } from 'react';

const Image = lazy(()=> import('./code-splitting/Image'));
const Slogan = lazy(()=> import('./code-splitting/slogan'));
const Footer = lazy(()=> import('./code-splitting/Footer'));
const Jumbotron = lazy(()=> import('./code-splitting/Jumbotron'));


function App() {
  return (
    <div className="App">
      <div className= "container-fluid">
      <header className="App-header">
        
      <Suspense fallback={
          <p>Não desista de nós.. estamos trabalhando nissoo....</p>}>
           <Jumbotron />
           </Suspense>

      <Suspense fallback={<center>
        <img src={gif} alt="carregando"/> </center>}>
         <Image />
         </Suspense>
           

           <Suspense fallback={
          <p>Não desista de nós.. estamos trabalhando nissoo....</p>}>
           <Slogan />
           </Suspense>


           <Suspense fallback={<center>
        <img src={cupom} alt="cupom"/> </center>}>
         <Footer />
         </Suspense>
        
      </header>
    </div>
    </div>
  );
}

export default App;

