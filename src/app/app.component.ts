import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  menu = [
    {
      "id":"home",
      "name":"Home",
      "path":"/home"
    },
    {
      "id":"about",
      "name":"About",
      "path":"/about"
    },
    {
      "id":"user",
      "name":"User",
      "path":"/user"
    },
    {
      "id":"userlist",
      "name":"User List",
      "path":"/userlist"
    }
  ];

  showFiller = true;
  title = 'app';
}
