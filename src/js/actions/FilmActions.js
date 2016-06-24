import dispatcher from "../dispatcher";
import fetch from 'isomorphic-fetch';
import { SWAPI_ROOT, getResources } from "../swapi";

export function getFilm(id) {
  dispatcher.dispatch({type: "FETCH_FILMS"});
  fetch(SWAPI_ROOT+"films/"+id)
    .then(function(response) {
      return response.json();
    })
    .then(function(film) {
      dispatcher.dispatch({type: "RECEIVE_FILMS", film: film});
    });

}