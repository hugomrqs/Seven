import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {HomePageDataService} from "../../../services/home-page-data/home-page-data.service";
import {Film} from "../../../modele/film.modele";
import {ApiService} from "../../../services/api/api.service";



@Component({
  selector: 'app-rated-movies',
  templateUrl: './rated-movies.component.html',
  styleUrls: ['./rated-movies.component.scss']
})

export class RatedMoviesComponent implements OnInit{
  receivedData: Film | undefined;
  note : number | undefined
  credits = []

  constructor(private api: ApiService,private data : HomePageDataService,) {}

 
  submitVote(){
    if(this.note){
      this.api.postRateMovie({value : this.note*2}).subscribe( response =>{
        console.log(response)
      })
    }
  }

  ngOnInit(): void {
    this.data.selectedData$.subscribe(data => {
      this.receivedData = data;
      this.api.getCredentials(this.receivedData.id).subscribe( response =>{
        this.credits = response.results.slice(0,3);
      })
    });

  }

  getButtonClass(value : number) {
    this.note = value
    console.log(this.credits)
  }

}
