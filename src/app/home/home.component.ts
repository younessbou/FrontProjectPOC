import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | null;
  role: string | null;

  constructor() {this.username=sessionStorage.getItem('username');
  this.role=sessionStorage.getItem('role'); }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
  this.role=sessionStorage.getItem('role');
  }

}
