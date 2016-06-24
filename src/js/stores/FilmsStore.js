import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { showLoading } from "../swapi";

class FilmsStore extends EventEmitter {
  constructor() {
    super()
    this.films = [];
  }

  getAll() {
    return this.films;
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
        this.films = action.films;
        this.emit("change");
        break;
      }
    }
  }

}

const filmsStore = new FilmsStore;
dispatcher.register(filmsStore.handleActions.bind(filmsStore));

export default filmsStore;