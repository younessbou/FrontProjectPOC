import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.css']
})
export class UsersManagerComponent implements OnInit {
  username:any;
  id: any;
  users: any;
  managers: any;
  role: any;

  constructor(private httpClientService:HttpClientService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.id=sessionStorage.getItem('id');
    this.role=sessionStorage.getItem('role');
    this.httpClientService.getUsers().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.httpClientService.getManagers().subscribe(
      response =>this.handleSuccessfulResponse1(response),
     );
  }

  handleSuccessfulResponse(response:any)
  {
      this.users=response;
  }

  handleSuccessfulResponse1(response:any)
  {
      this.managers=response;
  }
  
  nom_existe=false;
  invalid=false;
  onSubmit(form: NgForm) {
    if(form.value.nom!="" ){
      this.users.forEach((element: any) => {
        if(element.nom==form.value.nom && element.prenom==form.value.prenom && element.login==form.value.login  )this.nom_existe=true;
        
      });
      //console.log(form.value)
      if(this.nom_existe!=true){  
      this.invalid=false;
      
      this.httpClient.post("http://localhost:8080/managers_user/"+this.id, JSON.stringify(form.value)).toPromise().then((data:any) => {
        //console.log(data);
        window.location.reload();
      });
    } else{ this.invalid=true}}
  else{ this.invalid=true}
  this.nom_existe=false;
}

}
