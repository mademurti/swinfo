import React from "react";
import { Link } from 'react-router';
import * as FilmActions from "../actions/FilmActions";
import FilmStore from "../stores/FilmStore";

export default class Film extends React.Component {
  constructor() {
    super();
    this.getFilm = this.getFilm.bind(this);
    this.state = {
      film: FilmStore.getAll(),
    };
  }

  componentWillMount() {
    FilmActions.getFilm(this.props.params.id);
    FilmStore.on("change", this.getFilm);
  }

  componentWillUnmount() {
    FilmStore.removeListener("change", this.getFilm);
  }

  getFilm() {
    this.setState({
      film: FilmStore.getAll(),
    });
  }

  render() {    
    const { film } = this.state;

    if (typeof film == "undefined") { /* if film empty */
      return (
        <div class="col-md-12">Loading....</div>
      );
    } else {
      return (
        <div class="col-md-12">
          <h1>{film.title}</h1>
          <p>{film.opening_crawl}</p>
          <ul>
            <li><strong>Director:</strong> {film.director}</li>
            <li><strong>Producer:</strong> {film.producer}</li>
            <li><strong>Release Date:</strong> {film.release_date}</li>
          </ul>
          <Link to="films" class="btn btn-default">Back to Films</Link>
        </div>        
      );
    }
  }
}
