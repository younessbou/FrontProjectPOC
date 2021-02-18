import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ProjetComponent } from './projet/projet.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjetManagerComponent } from './projet-manager/projet-manager.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { AddProjetManagerComponent } from './add-projet-manager/add-projet-manager.component';
import { ChangeStatutComponent } from './change-statut/change-statut.component';
import { ChangeStatutManagerComponent } from './change-statut-manager/change-statut-manager.component';
import { ChangeManagerComponent } from './change-manager/change-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    ProjetComponent,
    HomeComponent,
    ProjetManagerComponent,
    UsersManagerComponent,
    AddProjetManagerComponent,
    ChangeStatutComponent,
    ChangeStatutManagerComponent,
    ChangeManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
