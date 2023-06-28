import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  clickCounter : number = 0; 
  name: string = '';

  countClick(){
    this.clickCounter += 1;
  }

  setClasses(){
    // defining an object 
    let myClasses = {
      // class to add or remove according to a condition 
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

}
