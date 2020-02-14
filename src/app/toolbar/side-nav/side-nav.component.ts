import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
 
  currentYear:Number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
