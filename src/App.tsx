import { useState } from "react"
import type PokemonDTO from "./types/PokemonDTO"
import "./App.css"
import { PokemonDetail } from "./components/PokemonDetail"
import { PokemonList } from "./components/PokemonList"
import { SearchBar } from "./components/SearchBar"

export function App({ pokemons }: { pokemons: PokemonDTO[] }) {
    const [currentPokemon, setPokemon] = useState(pokemons[0]);
    
    return (
        <div className="container-element">
            <PokemonList pokemons={pokemons} onClickChangePokemon={setPokemon} />
            <div className="container-search-detail">
                <SearchBar InputPokemon ={setPokemon} />
                <PokemonDetail pokemon={currentPokemon}
                    pokemons={pokemons}
                    onClickChangePokemon={
                        setPokemon}
                />
            </div>
        </div>
    )
}
