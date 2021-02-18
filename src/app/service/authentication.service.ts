import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  users:any;
  managers:any;
  admin:any;

  constructor(private httpClientService:HttpClientService) {
    this.httpClientService.getUsers().subscribe(users => this.users = users);
    this.httpClientService.getManagers().subscribe(managers => this.managers = managers);
    this.httpClientService.getAdmin().subscribe(admin => this.admin = admin);
   }
  
  authenticate(username: any, password: any) {
    var existe_user = false;
    var existe_manager = false;
    var existe_admin = false;
    let id=0;
    this.users.forEach((user: any) => {
      if(username==user.login && password ==user.password ){
        existe_user=true;
        id=user.id;
      }
    });
    this.managers.forEach((manager: any) => {
      if(username==manager.login && password ==manager.password ){
        existe_manager=true;
        id=manager.id;
      }
    });
    this.admin.forEach((admin: any) => {
      if(username==admin.login && password ==admin.password ){
        existe_admin=true;
        id=admin.id;
      }
    });
    if (existe_user || existe_manager || existe_admin) {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('id', id.toString())
      if(existe_user) sessionStorage.setItem('role', 'user');
      if(existe_manager) sessionStorage.setItem('role', 'manager');
      if(existe_admin) sessionStorage.setItem('role', 'admin');
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
}