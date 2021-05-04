import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {
        case RECEIVE_ALL_POKEMON: 
            debugger
            return action.pokemon;
        case RECEIVE_POKEMON:
            return [];
        default:
            return state; 
    }
}