import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Users{
  constructor(
    public id:number,
    public nom:string,
    public prenom:string,
    public password:string,
    public login:string,
  ) {}
}

export class Temps{
  constructor(
    public id:number,
    public nbhours:number,
    public user:Users,
  ) {}
}
export class Projets{
  constructor(
    public id:number,
    public nom:string,
    public temps:Array<Temps>,
    public user:Array<Users>,
    public manager:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<Users[]>('http://localhost:8080/users');
  }

  getManagers()
  {
    return this.httpClient.get<Users[]>('http://localhost:8080/managers');
  }

  getAdmin()
  {
    return this.httpClient.get<Users[]>('http://localhost:8080/admin');
  }

  
}
