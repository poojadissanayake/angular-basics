import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any
  
  // dependency injection 
  constructor(private _http: HttpService) {}

  // life cycle hook - whatever inside this runs when the component is loaded 
  // ngOnInit() is a lifecycle hook that is fired when the component loads. So, 
  // we're saying, run our .method() from the service when the component loads. 
  
  ngOnInit(){
    // this._http.myMethod();

    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}
