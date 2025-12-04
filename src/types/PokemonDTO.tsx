export default interface PokemonDTO{
    pokedexId: number;
    name : string;
    image : string;
    sprite : string
    stats : {
        HP : number;
        attack : number;
    }
    apiEvolutions : ApiEvolutions[]
    apiTypes : ApiType[]
    
};

export interface ApiType {
    name : string;
    image : string;
}
export interface ApiEvolutions{
    name : string;
    pokedexId : number;
}