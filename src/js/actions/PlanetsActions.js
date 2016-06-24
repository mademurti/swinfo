import dispatcher from "../dispatcher";
import fetch from 'isomorphic-fetch';
import { SWAPI_ROOT } from "../swapi";

export function getPlanets(page = 1) {
	let pageQuery = "?page="+page;
	
	if (page === 1) {
		pageQuery = '';
	} 
	
	const url = SWAPI_ROOT+"planets/"+pageQuery;
  
  dispatcher.dispatch({type: "FETCH_PLANETS"});
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(planets) {
      dispatcher.dispatch({type: "RECEIVE_PLANETS", planets: planets, planetsArray: planets.results});
    });

}