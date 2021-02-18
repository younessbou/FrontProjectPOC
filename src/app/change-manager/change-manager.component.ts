import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrls: ['./change-manager.component.css']
})
export class ChangeManagerComponent implements OnInit {

  id: any;
  managers: any;
  username: any;
  users:any;
  admin:any;
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
     this.httpClientService.getAdmin().subscribe(
      response =>this.handleSuccessfulResponse1(response),
     );
  }

  handleSuccessfulResponse(response:any)
  {
      this.managers=response;
  }
  handleSuccessfulResponse1(response:any)
  {
      this.admin=response;
  }
  handleSuccessfulResponse2(response:any)
  {
      this.users=response;
  }

  invalid=false;
  usersproject: any;
  existe=false;
  onSubmit(form: NgForm) {
    if(form.value.users!="" && form.value.managers!=""){
      var splitted = form.value.users.split(" ", 2);
      var nom=splitted[0];
      var prenom=splitted[1];
      var user_id=null;
      this.users.forEach((element: any) => {
        if(element.nom==nom && element.prenom==prenom){
          user_id=element.id;
        }
      });
      var splitted1 = form.value.managers.split(" ", 2);
      var nom_manager=splitted1[0];
      var prenom_manager=splitted1[1];
      var manager_id=null;
      this.managers.forEach((element: any) => {
        if(element.nom==nom_manager && element.prenom==prenom_manager){
          manager_id=element.id;
        }
      });
      var json_final = { 
        "id1":user_id, 
        "id2":manager_id 
     }; 
     
        this.httpClient.patch("http://localhost:8080/admin/ChangeManager", JSON.stringify(json_final)).toPromise().then((data:any) => {
          //console.log(data);
          window.location.reload();
        });
    
    }else{ this.invalid=true}
  }


}
