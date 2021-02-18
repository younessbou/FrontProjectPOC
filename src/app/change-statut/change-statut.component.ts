import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-change-statut',
  templateUrl: './change-statut.component.html',
  styleUrls: ['./change-statut.component.css']
})
export class ChangeStatutComponent implements OnInit {

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
    if(form.value.users!="" && form.value.nvrole!="" ){
      var splitted = form.value.users.split(" ", 2);
      var nom=splitted[0];
      var prenom=splitted[1];
      var user_id=null;
      this.users.forEach((element: any) => {
          if(element.nom==nom && element.prenom==prenom){
            user_id=element.id;
          }
      });
      //console.log(user_id)
      
      if(this.existe!=true){  
        this.invalid=false;
        if(form.value.nvrole=="Manager")
        this.httpClient.patch("http://localhost:8080/admin/Matous/"+user_id,null).toPromise().then((data:any) => {
          //console.log(data);
          window.location.reload();
        });
        if(form.value.nvrole=="Admin")
        this.httpClient.patch("http://localhost:8080/admin/Matoad/"+user_id,null).toPromise().then((data:any) => {
          //console.log(data);
          window.location.reload();
        });
      } else{ this.invalid=true}
    
    }else{ this.invalid=true}
    this.existe=false;
  }

}
