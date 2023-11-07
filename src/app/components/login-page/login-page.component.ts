import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {
  private isConfigSubscribed: boolean = false;
   response : any
   token: string | undefined
  isAuth(): void {
    if (!this.isConfigSubscribed) {
      this.api.getConfig().subscribe((data) => {
        this.response = data;
        this.isConfigSubscribed = true;
        console.log(data)
        this.token = this.response?.request_token
        window.location.href = `https://www.themoviedb.org/authenticate/${this.token}?redirect_to=http://localhost:4200/home`
      })
    }
  }
  constructor(private api: ApiService) {
  }
}
