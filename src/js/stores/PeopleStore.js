import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { showLoading } from "../swapi";

class PeopleStore extends EventEmitter {
  constructor() {
    super()
    this.people = [];
    this.page = 1;
    this.peopleArray = [];
  }

  getAll() {
    return this.people;
  }

  initPage() {
    return this.page;
  }

  getPeopleArray() {
    return this.peopleArray;
  }

  handleActions(action) {
    switch(action.type) {
      case "FETCH_PEOPLE": {
        showLoading(true);
        //this.emit("change");
        break;
      }
      case "RECEIVE_PEOPLE": {
        showLoading(false);
        this.people.push(action.people);
        this.peopleArray.push.apply(this.peopleArray, action.peopleArray);
        this.emit("change");
        break;
      }
    }
  }

}

const peopleStore = new PeopleStore;
dispatcher.register(peopleStore.handleActions.bind(peopleStore));

export default peopleStore;