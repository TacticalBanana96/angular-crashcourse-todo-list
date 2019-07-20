import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Daria';

  constructor() {
    this.changeName('Julie');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
