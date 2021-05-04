export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"
import * as APIUtil from '../util/api_util';


export const receiveAllPokemon = (pokemon) => {
    return ({
        type: RECEIVE_ALL_POKEMON,
        pokemon
    })
}

export const receivePokemon = (pokemon) => {
    return ({
        type: RECEIVE_POKEMON,
        pokemon
    })
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

window.receiveAllPokemon = receiveAllPokemon; 