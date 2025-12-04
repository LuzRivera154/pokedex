
import ReactDom from 'react-dom/client'
import { App } from './App'

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
.then(res => res.json())
.then(pokemons => {
  ReactDom.createRoot(document.getElementById('root')!).render(
    
      <App pokemons = {pokemons} />   
  );
})


