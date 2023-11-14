import React, { useState } from 'react';
import './App.css';
import { Pokemon } from './model/Pokemon';
import axios from 'axios';


function App() {
  const [pokemonId,setPokemonId]=useState("")
  const [pokemon,setPokemon]=useState<Pokemon>()
  function changePokemonId(id:string){
    setPokemonId(pokemonId+id)
  }

  function searchPokemonById(){
    console.log("Buscando pokemon con id: "+pokemonId);
    axios.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+pokemonId).then((response:any)=>{
      setPokemon(response.data)
    });
  }

  //ColorComponent: compomente original, creado por nosotros
  const ColorComponent = () => {
    const setColor = (color: string) => {
      document.documentElement.style.setProperty('--green', color); 
    };
    
    return (
      <div className='colorchange_container'>
        <button className='colorchange_item color_1' onClick={() => setColor("#00ff00")}></button>
        <button className='colorchange_item color_2' onClick={() => setColor("#00ffff")}></button>
        <button className='colorchange_item color_3' onClick={() => setColor("#ff0000")}></button>
        <button className='colorchange_item color_4' onClick={() => setColor("#ffff00")}></button>
        <button className='colorchange_item color_5' onClick={() => setColor("#ff8000")}></button>
      </div>
    );
  }


  return (
    <div className="App">
      <div className='main_title'>
        <h1>POKEDEX RETRO</h1>
      </div>
      <div className='main_container'>
        <div className='Pokedex_left_container'>
            <div className='Pokedex_img'>
              <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon_img"></img>
            </div>
            <div className='Pokedex_info'>
              <h2>Nombre: {pokemon?.name}</h2>
              <h2>ID Pokemon: {pokemon?.id}</h2>
              <h2>Altura:{pokemon?.height} </h2>
              <h2>Peso:{pokemon?.weight}</h2>
              <h2>Experiencia Base:{pokemon?.base_experience} pts</h2> 
              <h2>Vida:{pokemon?.stats[0].base_stat} pts</h2>
              <h2>Ataque:{pokemon?.stats[0].base_stat} pts</h2>
              <h2>Defense:{pokemon?.stats[0].base_stat} pts</h2>
              <h2>Ataque SP:{pokemon?.stats[0].base_stat} pts</h2>
              <h2>Defensa SP:{pokemon?.stats[0].base_stat} pts</h2>
              <h2>Velocidad:{pokemon?.stats[0].base_stat} pts</h2>    
            </div>
        </div>
        <div className="Pokedex_right_container">
          <div className='keyboard'>
          <h2>Pokemon Id: {pokemonId}</h2>
            <button className="btns_general" onClick={() => changePokemonId("1")}>1</button>
            <button className="btns_general" onClick={() => changePokemonId("2")}>2</button>
            <button className="btns_general" onClick={() => changePokemonId("3")}>3</button>
            <button className="btns_general" onClick={() => changePokemonId("4")}>4</button>
            <button className="btns_general" onClick={() => changePokemonId("5")}>5</button>
            <button className="btns_general" onClick={() => changePokemonId("6")}>6</button>
            <button className="btns_general" onClick={() => changePokemonId("7")}>7</button>
            <button className="btns_general" onClick={() => changePokemonId("8")}>8</button>
            <button className="btns_general" onClick={() => changePokemonId("9")}>9</button>
            <button className="btns_general" onClick={() => changePokemonId("0")}>0</button>
            <button className="btns_general big_btn1" onClick={() => { searchPokemonById(); setPokemonId(""); }}>Buscar</button>
            <button className="btns_general big_btn2" onClick={() => {setPokemon(undefined);setPokemonId("");}}>Borrar</button>
          </div>
        </div>
      </div>
      <div className='main_instructions'>
        <h3>Instrucciones Importantes</h3>
        <p>*Esta Pokedex abarca hasta 1017 pokemones, eso quiere decir que numeros apartir
          del 1018 no funcionaran. Gracias por su comprensión*
        </p>
      </div>
      <h3>Color change</h3>
      <ColorComponent></ColorComponent>
    </div>
  );
}

export default App;
