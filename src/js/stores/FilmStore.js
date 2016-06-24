import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { showLoading } from "../swapi";

class FilmStore extends EventEmitter {
  constructor() {
    super()
    this.film;
  }

  getAll() {
    return this.film;
  }

  handleActions(action) {
    switch(action.type) {
      case "FETCH_FILMS": {
        showLoading(true);
        //this.emit("change");
        break;
      }
      case "RECEIVE_FILMS": {
        showLoading(false);
        this.film = action.film;
        this.emit("change");
        break;
      }
    }
  }

}

const filmStore = new FilmStore;
dispatcher.register(filmStore.handleActions.bind(filmStore));

export default filmStore;