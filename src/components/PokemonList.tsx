import type PokemonDTO from "../types/PokemonDTO";
import { Pokemon } from "./Pokemon";

export function PokemonList({ pokemons, onClickChangePokemon }:
    {
        pokemons: PokemonDTO[], onClickChangePokemon:
            (pokemon: PokemonDTO) => void
    }) {

    return (
        <div className="container-element-li margin">
            {pokemons.map((pokemon) => (
                <Pokemon
                    key={pokemon.pokedexId}
                    pokemon={pokemon}
                    onClickChangePokemon={onClickChangePokemon}
                />
            ))}
        </div>
    )
}
