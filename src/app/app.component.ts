import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'diario',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class AppComponent {

  constructor(
    private router: Router
  ) {
  }


}
