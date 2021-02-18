import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null;
  role: string | null;

  constructor(public loginService:AuthenticationService) { 
    this.username=sessionStorage.getItem('username');
    this.role=sessionStorage.getItem('role');
  }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.role=sessionStorage.getItem('role');
  }

}
