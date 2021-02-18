import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  users: any;
  username: any;
  role: any;

  constructor(private httpClientService:HttpClientService,private http: HttpClient) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.role=sessionStorage.getItem('role');
    this.httpClientService.getUsers().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response:any)
  {
      this.users=response;
  }
  id:any;
  invalid=false;
  onSubmit(form: NgForm) {
    if(form.value.nbhours!="" && form.value.id!=""){
      this.id=sessionStorage.getItem('id');
      this.invalid=false;
      //console.log(form.value);
      this.http.post("http://localhost:8080/users_time/"+this.id, JSON.stringify(form.value)).toPromise().then((data:any) => {
        //console.log(data);
        window.location.reload();
      });
  }
  else{ this.invalid=true}
    
}
}
