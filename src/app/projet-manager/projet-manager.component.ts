import { UsersManagerComponent } from './../users-manager/users-manager.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService, Projets } from '../service/http-client.service';

@Component({
  selector: 'app-projet-manager',
  templateUrl: './projet-manager.component.html',
  styleUrls: ['./projet-manager.component.css']
})
export class ProjetManagerComponent implements OnInit {
  id: any;
  managers: any;
  username: any;
  projets: any;
  users:any;
  role:any;
  constructor(private httpClientService:HttpClientService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.id=sessionStorage.getItem('id');
    this.role=sessionStorage.getItem('role');
    this.httpClientService.getManagers().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.httpClientService.getUsers().subscribe(
      response =>this.handleSuccessfulResponse2(response),
     );
     this.httpClient.get<Projets[]>('http://localhost:8080/projets').subscribe(
      (response: any) =>this.handleSuccessfulResponse1(response),
     );
  }

  handleSuccessfulResponse(response:any)
  {
      this.managers=response;
  }
  handleSuccessfulResponse1(response:any)
  {
      this.projets=response;
  }
  handleSuccessfulResponse2(response:any)
  {
      this.users=response;
  }
  invalid=false;
  usersproject: any;
  existe=false;
  onSubmit1(form: NgForm) {
    if(form.value.users!="" && form.value.projet!=""){
      var projet_id=null; 
      this.projets.forEach((element: any) => {
        if(element.nom==form.value.projet){
          this.usersproject=element.users;
          projet_id=element.id
        }
      });
      var splitted = form.value.users.split(" ", 2);
      var nom=splitted[0];
      var prenom=splitted[1];
      var user_id=null;
      this.users.forEach((element: any) => {
          if(element.nom==nom && element.prenom==prenom){
            user_id=element.id;
          }
      });
      this.usersproject.forEach((element: any) => {
        if(element.nom==nom && element.prenom==prenom){
          this.existe=true;
        }
      });
      var json_final = { 
        "id1":projet_id, 
        "id2":user_id 
     }; 
      if(this.existe!=true){  
        this.invalid=false;
        this.httpClient.post("http://localhost:8080/managersaddprouser/"+this.id, JSON.stringify(json_final)).toPromise().then((data:any) => {
          //console.log(data);
          window.location.reload();
        });
      } else{ this.invalid=true}
    
    }else{ this.invalid=true}
    this.existe=false;
  }

}
