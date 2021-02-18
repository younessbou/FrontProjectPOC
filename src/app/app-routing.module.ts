import { ChangeStatutManagerComponent } from './change-statut-manager/change-statut-manager.component';
import { ChangeStatutComponent } from './change-statut/change-statut.component';
import { AddProjetManagerComponent } from './add-projet-manager/add-projet-manager.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { ProjetManagerComponent } from './projet-manager/projet-manager.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';
import { ChangeManagerComponent } from './change-manager/change-manager.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'users', component: UsersComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'projet', component: ProjetComponent,canActivate:[AuthGaurdService] },
  { path: 'projetManager', component: ProjetManagerComponent,canActivate:[AuthGaurdService] },
  { path: 'usersManager', component: UsersManagerComponent,canActivate:[AuthGaurdService] },
  { path: 'addProjetManager', component: AddProjetManagerComponent,canActivate:[AuthGaurdService] },
  { path: 'changeStatut', component: ChangeStatutComponent,canActivate:[AuthGaurdService] },
  { path: 'changeStatutManager', component: ChangeStatutManagerComponent,canActivate:[AuthGaurdService] },
  { path: 'changeManager', component: ChangeManagerComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
