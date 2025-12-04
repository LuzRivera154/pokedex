
import type PokemonDTO from "../types/PokemonDTO"
import type { ApiType } from "../types/PokemonDTO"
import { Pokemon } from "./Pokemon"

export function PokemonDetail({ pokemon, pokemons, onClickChangePokemon }: { pokemon: PokemonDTO, pokemons: PokemonDTO[], onClickChangePokemon: (pokemon: PokemonDTO) => void }) {

    const evolutionBasic = pokemon.apiEvolutions || [];

    const allEvolutions = evolutionBasic.map((currentEvolution) => {
        const pokemonEvolution = pokemons.find((currentPokemon) =>
            currentPokemon.pokedexId === currentEvolution.pokedexId
        );
        return pokemonEvolution;
    });
    const evolucionesCompletas = allEvolutions.filter(
        (pokemonEvolution): pokemonEvolution is PokemonDTO => pokemonEvolution !== undefined
    );

    return (
        <div className="pokemon-detail">
            <p className="id-detail margin"> n° {pokemon.pokedexId} </p>
            <img className="img-detail" src={pokemon.image} alt={pokemon.name} />
            <h3 className="margin" >{pokemon.name}</h3>
            <p >Types</p>
            <div className="types-container">
                {pokemon.apiTypes.map((types: ApiType) => <img src={types.image} alt="" />)}
            </div>

            <div>
                <h3 >Evolution</h3>
                {evolucionesCompletas.map((pokemonEvolution) =>
                    <Pokemon className="pokemon-evolution-item" key={pokemonEvolution.pokedexId}
                        pokemon={pokemonEvolution}
                        onClickChangePokemon={onClickChangePokemon} />)}
            </div>
        </div>
    )
}

