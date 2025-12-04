import type PokemonDTO from "../types/PokemonDTO"

export type PokemonProps = {
    pokemon: PokemonDTO;
    className?: string;
    onClickChangePokemon:(pokemon : PokemonDTO) => void;
}

export function Pokemon({ pokemon, className, onClickChangePokemon = () => { } }: PokemonProps) {
    
if(!pokemon) return null;

    return (
        <div className="elemento" onClick={()=>{onClickChangePokemon(pokemon)}}>
            <div className={`p-list ${className || ''}`}>
                <p> {pokemon.pokedexId}</p>
                <p> {pokemon.name}</p>
            </div>
            <img src={pokemon.image} className="img-elemento" alt={pokemon.name} />
        </div>
    )
}