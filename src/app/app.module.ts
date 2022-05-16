import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddSalarySheetComponent } from './add-salary-sheet/add-salary-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    UpdateUsersComponent,
    EmployeeComponent,
    ListUsersComponent,
    ViewUserComponent,
    HomeComponent,
    EmployeeComponent,
    UpdateUsersComponent,
    AddSalaryComponent,
    AddSalarySheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
