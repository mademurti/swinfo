import React from "react";
import { Link } from 'react-router';
import * as FilmsActions from "../actions/FilmsActions";
import FilmsStore from "../stores/FilmsStore";
import { getResourcesId } from "../swapi";

export default class Films extends React.Component {
  constructor() {
    super();
    this.getFilms = this.getFilms.bind(this);
    this.state = {
      films: FilmsStore.getAll(),
    };
  }

  componentWillMount() {
    FilmsActions.getFilms();
    FilmsStore.on("change", this.getFilms);
  }

  componentWillUnmount() {
    FilmsStore.removeListener("change", this.getFilms);
  }

  getFilms() {
    this.setState({
      films: FilmsStore.getAll(),
    });
  }

  render() {    
    const { films } = this.state;
    
    if (typeof films == "undefined") { /* if film empty */
      return (
        <div class="col-md-12">Loading....</div>
      );
    } else {
      return (
        <div>
          <h1>Films</h1>
          <div class="row">
            {films.map(film => (
              <div key={getResourcesId("films", film.url)} class="col-md-12">
                <h2>{film.title}</h2>
                <p>{film.opening_crawl}</p>
                <Link to={`/film/${getResourcesId("films", film.url)}`} class="btn btn-default">More Info</Link>
              </div>
            ))}

          </div>
        </div>
      );
    }
  }
}
