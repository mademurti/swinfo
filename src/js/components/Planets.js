import React from "react";
import { Link } from 'react-router';
import * as PlanetsActions from "../actions/PlanetsActions";
import PlanetsStore from "../stores/PlanetsStore";
import { getResourcesId } from "../swapi";

export default class Planets extends React.Component {
  constructor() {
    super();
    this.getPlanets = this.getPlanets.bind(this);
    this.state = {
      planets: PlanetsStore.getAll(),
      page: PlanetsStore.initPage(),
      planetsArray: PlanetsStore.getPlanetsArray(),
    };
  }

  componentWillMount() {
    PlanetsActions.getPlanets();
    PlanetsStore.on("change", this.getPlanets);
  }

  componentWillUnmount() {
    PlanetsStore.removeListener("change", this.getPlanets);
  }

  getPlanets() {
    this.setState({
      planets: PlanetsStore.getAll(),
    });
  } 

  getNextPage() {
  	PlanetsActions.getPlanets(this.state.page+1);
  	this.setState({
  		page: this.state.page+1,
  	});
  }

  render() {   
    if (typeof this.state.planets[(this.state.page)-1] == "undefined") {
      return null;
    } else {
    	const btnNextClass = this.state.planets[(this.state.page)-1].next === null ? "hide btn btn-default" : "btn btn-default";
      return (
        <div><z></z>
          <h1>People</h1>
          <div class="row">
            {this.state.planetsArray.map(planet => (
              <div key={getResourcesId("planets", planet.url)} class="col-md-12">
                <h2>{planet.name}</h2>
                <ul>
                	<li>Climate: {planet.climate}</li>
                	<li>Gravity: {planet.gravity}</li>
                	<li>Terrain: {planet.terrain}</li>
                </ul>
              </div>
            ))}

          </div>
          <button class={btnNextClass} style={{margin: "auto", display: "block"}} onClick={this.getNextPage.bind(this)}>Load More</button>
        </div>
      );
    }
  }
}
