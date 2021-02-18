import { Users } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  managers:any;
  id:any;
  role:any;
  constructor(private httpClientService:HttpClientService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('id');
    this.role=sessionStorage.getItem('role');
    //console.log(sessionStorage.getItem('id'));
    this.httpClient.get<Users[]>('http://localhost:8080/managers/times/'+this.id).subscribe(
      (response: any) =>this.handleSuccessfulResponse(response),
     );
  }

   handleSuccessfulResponse(response:any)
{
    this.managers=response;
   // console.log(this.managers)
}

}
