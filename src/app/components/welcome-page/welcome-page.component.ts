import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit{
  public dataTest: any;
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.dataTest = this.api.getConfig();
    console.log('ere',this.dataTest)
  }

}
