import React from "react";
import { Link } from 'react-router';
import * as PeopleActions from "../actions/PeopleActions";
import PeopleStore from "../stores/PeopleStore";
import { getResourcesId } from "../swapi";

export default class People extends React.Component {
  constructor() {
    super();
    this.getPeople = this.getPeople.bind(this);
    this.state = {
      people: PeopleStore.getAll(),
      page: PeopleStore.initPage(),
      peopleArray: PeopleStore.getPeopleArray(),
    };
  }

  componentWillMount() {
    PeopleActions.getPeople();
    PeopleStore.on("change", this.getPeople);
  }

  componentWillUnmount() {
    PeopleStore.removeListener("change", this.getPeople);
  }

  getPeople() {
    this.setState({
      people: PeopleStore.getAll(),
    });
  } 

  getNextPage() {
  	PeopleActions.getPeople(this.state.page+1);
  	this.setState({
  		page: this.state.page+1,
  	});
  }

  render() {        
    if (typeof this.state.people[(this.state.page)-1] == "undefined") {
      return null;
    } else {
    	const btnNextClass = this.state.people[(this.state.page)-1].next === null ? "hide btn btn-default" : "btn btn-default";
      return (
        <div><z></z>
          <h1>People</h1>
          <div class="row">
            {this.state.peopleArray.map(person => (
              <div key={getResourcesId("people", person.url)} class="col-md-12">
                <h2>{person.name}</h2>
                <ul>
                	<li>Height: {person.height}</li>
                	<li>Mass: {person.mass}</li>
                	<li>Gender: {person.gender}</li>
                </ul>
                {/*<Link to={`/people/${getResourcesId("people", person.url)}`} class="btn btn-default">More Info</Link>*/}
              </div>
            ))}

          </div>
          <button class={btnNextClass} style={{margin: "auto", display: "block"}} onClick={this.getNextPage.bind(this)}>Load More</button>
        </div>
      );
    }
  }
}
