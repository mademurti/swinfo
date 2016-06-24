import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { showLoading } from "../swapi";

class PlanetsStore extends EventEmitter {
  constructor() {
    super()
    this.planets = [];
    this.page = 1;
    this.planetsArray = [];
  }

  getAll() {
    return this.planets;
  }

  initPage() {
    return this.page;
  }

  getPlanetsArray() {
    return this.planetsArray;
  }

  handleActions(action) {
    switch(action.type) {
      case "FETCH_PLANETS": {
        showLoading(true);
        //this.emit("change");
        break;
      }
      case "RECEIVE_PLANETS": {
        showLoading(false);
        this.planets.push(action.planets);
        this.planetsArray.push.apply(this.planetsArray, action.planetsArray);
        this.emit("change");
        break;
      }
    }
  }

}

const planetsStore = new PlanetsStore;
dispatcher.register(planetsStore.handleActions.bind(planetsStore));

export default planetsStore;