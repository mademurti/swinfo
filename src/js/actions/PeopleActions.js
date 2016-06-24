import dispatcher from "../dispatcher";
import fetch from 'isomorphic-fetch';
import { SWAPI_ROOT } from "../swapi";

export function getPeople(page = 1) {
	let pageQuery = "?page="+page;
	
	if (page === 1) {
		pageQuery = '';
	} 
	
	const url = SWAPI_ROOT+"people/"+pageQuery;
  
  dispatcher.dispatch({type: "FETCH_PEOPLE"});
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(people) {
        dispatcher.dispatch({type: "RECEIVE_PEOPLE", people: people, peopleArray: people.results});
    });

}