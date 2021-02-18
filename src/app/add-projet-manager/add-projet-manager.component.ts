import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService, Projets } from '../service/http-client.service';

@Component({
  selector: 'app-add-projet-manager',
  templateUrl: './add-projet-manager.component.html',
  styleUrls: ['./add-projet-manager.component.css']
})
export class AddProjetManagerComponent implements OnInit {

  id: any;
  managers: any;
  username: any;
  projets: any;
  users:any;
  role:any;

  constructor(private httpClientService:HttpClientService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.role=sessionStorage.getItem('role');
    this.id=sessionStorage.getItem('id');
    this.httpClient.get<Projets[]>('http://localhost:8080/projets').subscribe(
      (response: any) =>this.handleSuccessfulResponse1(response),
     );
     this.httpClientService.getManagers().subscribe(
      response =>this.handleSuccessfulResponse(response),
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

  nom_existe=false;
  invalid=false;
  onSubmit(form: NgForm) {
    if(form.value.nom!="" ){
      this.projets.forEach((element: any) => {
        if(element.nom==form.value.nom)this.nom_existe=true;
        
      });
      if(this.nom_existe!=true){  
      this.invalid=false;
      this.httpClient.post("http://localhost:8080/managers_projets/"+this.id, JSON.stringify(form.value)).toPromise().then((data:any) => {
        //console.log(data);
        window.location.reload();
      });}
      else{ this.invalid=true}}
    else{ this.invalid=true}
    this.nom_existe=false;
  }
}
