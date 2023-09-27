import { makeAutoObservable } from 'mobx';
import { actorsData } from './static-data/products/actors';
import { athleteData } from './static-data/products/athlete';

export class Store {
  actors = actorsData;
  athlete = athleteData;

  constructor() {
    makeAutoObservable(this);
  }
}
