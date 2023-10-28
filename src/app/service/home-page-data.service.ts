import { Injectable } from '@angular/core';
import {Film} from "../modele/film.modele";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HomePageDataService {
  private selectedDataSubject = new BehaviorSubject<any>(null);
  selectedData$ = this.selectedDataSubject.asObservable();

  constructor() {}
  setSelectedData(data: any) {
    this.selectedDataSubject.next(data);
  }
}
