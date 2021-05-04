import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore();
    window.store = store;
    window.requestAllPokemon = requestAllPokemon;
    
    ReactDOM.render(<Root store={store} />, root)
})