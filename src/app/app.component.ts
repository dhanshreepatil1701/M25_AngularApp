import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // This is nested component
  template:`<div>
  <h1>{{title1}}</h1>
  <app-student></app-student>
  </div>` ,
  //External Template
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkillSoft';
  title1 = 'Student Details';
}
