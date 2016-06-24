import dispatcher from "../dispatcher";
import fetch from 'isomorphic-fetch';
import { SWAPI_ROOT } from "../swapi";

export function getFilms() {
  dispatcher.dispatch({type: "FETCH_FILMS"});
  fetch(SWAPI_ROOT+"films/")
    .then(function(response) {
      return response.json();
    })
    .then(function(films) {
        dispatcher.dispatch({type: "RECEIVE_FILMS", films: films.results});
    });

}