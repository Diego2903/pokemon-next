import { pokeApi } from '../api';
import { PokemonFull } from '../interface';


export const getPokemonInfo = async( nameOrId: string ) => {

    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}