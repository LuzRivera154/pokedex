import type PokemonDTO from "../types/PokemonDTO";

export function SearchBar({ InputPokemon }: { InputPokemon: (pokemon: PokemonDTO) => void }) {
    function findPokemon(e: any) {
        const namePokemon = e.target.value;
        if (namePokemon.length < 1) {
            return
        }
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${namePokemon}`)
            .then(resp => resp.json())
            .then(pokemon => {
                if (pokemon?.pokedexId) {
                    InputPokemon(pokemon);
                }
            })
    }
    return (
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass lupa"></i>
            <input className="input-search" type="text" onChange={findPokemon} />
        </div>
    )
}