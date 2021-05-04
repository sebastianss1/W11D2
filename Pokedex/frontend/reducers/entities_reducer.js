import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon_reducer'


const entitiesReducer = combineReducers({
    pokemon: pokemonReducer
    // item: itemReducer(),
    // move: moveReducer()
});

export default entitiesReducer;
window.pokemonReducer = pokemonReducer; 